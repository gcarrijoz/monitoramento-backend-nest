// mqtt.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { MeasurementService } from '../measurement/measurement.service';
import { WebSocketGatewayApp } from '../websocket.gateway';
import { EventLogService } from '../event-log/event-log.service'; // Novo serviço para logs
import { DeviceService } from 'src/device/device.service';

@Injectable()
export class MqttService implements OnModuleInit {
  private readonly logger = new Logger(MqttService.name);
  private mqttClient: mqtt.MqttClient;
  
  // Mapeamentos para controle
  private lastPackets = new Map<string, number>();      // Último timestamp por MAC
  private confirmedBPM = new Map<string, number>();    // Último BPM confirmado por MAC
  private provisionalBPM = new Map<string, number>();  // Valores suspeitos aguardando confirmação
  
  // Constantes de configuração
  private readonly EXPECTED_TIMEOUT = 6000;     // 6 segundos
  private readonly MAX_VARIATION = 50;           // Variação máxima permitida
  private readonly CONFIRMATION_THRESHOLD = 5;   // Diferença para confirmação

  constructor(
    private readonly wsGateway: WebSocketGatewayApp,
    private readonly measurementService: MeasurementService,
    private readonly eventLogService: EventLogService,// Novo serviço
    private readonly deviceService: DeviceService,
  ) {}

  async onModuleInit() {
    await this.connectToMqtt();
    this.startMonitoring();
  }

  // Se conecta ao Mqtt e recebe os dados
  private async connectToMqtt() {
    try {
      this.mqttClient = mqtt.connect('mqtt://192.168.184.35');

      this.mqttClient.on('connect', () => {
        this.logger.log('Conectado ao Broker MQTT');
        this.mqttClient.subscribe('dados_bpm');
      });

      this.mqttClient.on('message', async (topic, message) => {
        try {
          const rawData = JSON.parse(message.toString());
          this.logger.debug(`📡 Dados MQTT recebidos: ${JSON.stringify(rawData)}`);
          
          // como os dados foram recebidos, processa eles.
          await this.processMqttMessage(rawData);
          
        } catch (error) {
          this.logger.error('Erro ao processar mensagem:', error);
          this.wsGateway.emitEvent('error', {
            event: 'error',
            message: 'Erro no processamento MQTT',
            details: error.message
          });
        }
      });

      this.mqttClient.on('error', (error) => {
        this.logger.error('Erro na conexão MQTT:', error);
      });

    } catch (error) {
      this.logger.error('Falha ao conectar ao MQTT:', error);
    }
  }

  // apos os dados terem sido recebidos no connectToMqtt. Aqui fazemos o processamento e as validações 
  private async processMqttMessage(data: any) {
    const { id_dispositivo: macAddress, bpm, timestamp } = data;

    // Validação básica
    if (!macAddress || typeof bpm !== 'number' || typeof timestamp !== 'number') {
      this.logger.warn(`⚠️ Mensagem MQTT inválida: ${JSON.stringify(data)}`);
      return;
    }

    // Atualiza o último pacote recebido
    this.lastPackets.set(macAddress, Date.now());

    // Verifica sensor desconectado (BPM = 0)
    if (bpm === 0) {
      await this.handleDisconnectedSensor(macAddress);
      return;
    }

    // Processa variações de BPM
    await this.processBpmVariation(macAddress, bpm, timestamp);
  }

  private async handleDisconnectedSensor(macAddress: string) {
    const device = await this.deviceService.findByMac(macAddress);
    
    if (!device) {
        this.logger.warn(`Nenhum dispositivo encontrado com o mac: ${macAddress}`);
        return;
    }

    await this.eventLogService.createFromEsp({
      id_dispositivo: macAddress,
      eventType: 'SENSOR_DISCONNECTED',
      description: 'Sensor desconectado do paciente (BPM = 0)'
    });
    
    // NAO ENTENDI
    this.confirmedBPM.delete(macAddress);
    this.provisionalBPM.delete(macAddress);
    
    this.wsGateway.emitEvent('sensor_status', {
      event: 'sensor_status',
      macAddress,
      status: 'disconnected',
      timestamp: new Date().toISOString()
    });

    const payload = {
      event: 'bpm_update',
      macAddress,
      bpm: 0,
      status: 'zero_bpm',
      message: 'Paciente Sem Sinal',
      timestamp: new Date().toISOString(),
      room: device.room ? {
          id: device.room.id,
          sector: device.room.sector,
          floor: device.room.floor,
          number: device.room.number
      } : null,
      patient: device.room?.patient ? {
          id: device.room.patient.id,
          name: device.room.patient.name
      } : null
    };
  
  
  // 3. Emita um único evento completo
  this.wsGateway.emitEvent('bpm_update', payload);
  }

  private async processBpmVariation(macAddress: string, currentBpm: number, deviceTimestamp: number) {
    const lastConfirmed = this.confirmedBPM.get(macAddress);
    const provisionalValue = this.provisionalBPM.get(macAddress);

    if (lastConfirmed !== undefined) {
      const variation = Math.abs(currentBpm - lastConfirmed);

      // Detecção de variação anormal
      if (variation > this.MAX_VARIATION) {
        await this.handleAbnormalVariation(macAddress, currentBpm, lastConfirmed, provisionalValue, deviceTimestamp);
        return;
      }
    }

    // Se variação normal ou primeiro valor, confirma
    await this.confirmNormalReading(macAddress, currentBpm, deviceTimestamp);
  }

  private async handleAbnormalVariation(
    macAddress: string,
    currentBpm: number,
    lastConfirmed: number,
    provisionalValue: number | undefined,
    deviceTimestamp: number
  ) {
    // Se já existe valor provisório e está dentro do limiar de confirmação
    if (provisionalValue !== undefined && 
        Math.abs(currentBpm - provisionalValue) <= this.CONFIRMATION_THRESHOLD) {
      
      await this.confirmNewBpmLevel(macAddress, currentBpm, deviceTimestamp);
      
    } else {
      // Armazena como provisório e registra evento
      this.provisionalBPM.set(macAddress, currentBpm);
      
      await this.eventLogService.createFromEsp({
        id_dispositivo: macAddress,
        eventType: 'ABNORMAL_VARIATION',
        description: `Variação anormal detectada (de ${lastConfirmed} para ${currentBpm}). Aguardando confirmação.`
      });
      
      this.wsGateway.emitEvent('bpm_alert', {
        event: 'bpm_alert',
        macAddress,
        currentBpm,
        lastConfirmedBpm: lastConfirmed,
        status: 'pending_confirmation',
        timestamp: new Date().toISOString()
      });
    }
  }

  private async confirmNewBpmLevel(macAddress: string, bpm: number, deviceTimestamp: number) {
    this.confirmedBPM.set(macAddress, bpm);
    this.provisionalBPM.delete(macAddress);
    
    try {
      const measurement = await this.measurementService.createFromEsp({
        bpm,
        id_dispositivo: macAddress,
        timestamp: deviceTimestamp
      });

      this.logger.log(`✅ Novo patamar de BPM confirmado para ${macAddress}: ${bpm}`);
      
      await this.eventLogService.createFromEsp({
        id_dispositivo: macAddress,
        eventType: 'NEW_BPM_LEVEL',
        description: `Novo patamar de BPM confirmado: ${bpm}`
      });

      this.emitMeasurementUpdate(measurement, macAddress, bpm, deviceTimestamp);
      
    } catch (error) {
      this.logger.error(`Erro ao confirmar novo BPM: ${error.message}`);
    }
  }

  private async confirmNormalReading(macAddress: string, bpm: number, deviceTimestamp: number) {
    this.confirmedBPM.set(macAddress, bpm);
    this.provisionalBPM.delete(macAddress);
    
    try {
      const measurement = await this.measurementService.createFromEsp({
        bpm,
        id_dispositivo: macAddress,
        timestamp: deviceTimestamp
      });

      this.logger.log(`📥 Dados válidos - Dispositivo: ${macAddress}, BPM: ${bpm}`);
      
      this.emitMeasurementUpdate(measurement, macAddress, bpm, deviceTimestamp);
      
    } catch (error) {
      this.logger.error(`Erro ao registrar medição normal: ${error.message}`);
    }
  }

  private emitMeasurementUpdate(measurement: any, macAddress: string, bpm: number, deviceTimestamp: number) {
    const payload = {
      event: 'bpm_update',
      bpm,
      macAddress,
      room: {
        id: measurement.patient.room.id,
        sector: measurement.patient.room.sector,
        floor: measurement.patient.room.floor,
        number: measurement.patient.room.number        
      },
      patient: {
        id: measurement.patient.id,
        name: measurement.patient.name,
        cpf: measurement.patient.cpf
      },
      deviceTimestamp,
      serverTimestamp: new Date().toISOString()
    };
    
    this.wsGateway.emitEvent('bpm_update', payload);
  }

  private startMonitoring() {
    setInterval(() => {
      const now = Date.now();
      this.lastPackets.forEach((lastTimestamp, macAddress) => {
        if (now - lastTimestamp > this.EXPECTED_TIMEOUT) {
          this.logger.warn(`⚠️ TIMEOUT`);
          this.handleTimeoutDisconnection(macAddress);
        }
      });
    }, 2000);
  }

  /*
  private async handleTimeoutDisconnection(macAddress: string) {
    await this.eventLogService.createFromEsp({
      id_dispositivo: macAddress,
      eventType: 'ESP32_DISCONNECTED',
      description: 'ESP32 desconectado (timeout)'
    });
    
    this.lastPackets.delete(macAddress);
    this.confirmedBPM.delete(macAddress);
    this.provisionalBPM.delete(macAddress);
    
    this.wsGateway.emitEvent('sensor_status', {
      event: 'sensor_status',
      macAddress,
      status: 'connection_lost', // Status mais descritivo
      timestamp: new Date().toISOString(),
      message: 'Perda de Conexão' // Mensagem direta
    });
    
    // Adicione também um evento de bpm_update com status especial
    this.wsGateway.emitEvent('bpm_update', {
      event: 'bpm_update',
      macAddress,
      bpm: null, // Indica que não há leitura
      status: 'connection_lost',
      message: 'Perda de Conexão',
      timestamp: new Date().toISOString()
    });

  }
  */

  private async handleTimeoutDisconnection(macAddress: string) {
    // 1. Primeiro obtenha as informações da sala associada ao MAC
    const device = await this.deviceService.findByMac(macAddress);
    
    if (!device) {
        this.logger.warn(`Nenhum dispositivo encontrado com o mac: ${macAddress}`);
        return;
    }

    await this.eventLogService.createFromEsp({
        id_dispositivo: macAddress,
        eventType: 'ESP32_DISCONNECTED',
        description: 'ESP32 desconectado (timeout)'
    });
    
    this.lastPackets.delete(macAddress);
    this.confirmedBPM.delete(macAddress);
    this.provisionalBPM.delete(macAddress);
    
    // 2. Inclua todas as informações necessárias no payload
    const payload = {
        event: 'bpm_update',
        macAddress,
        bpm: null,
        status: 'connection_lost',
        message: 'Perda de Conexão',
        timestamp: new Date().toISOString(),
        room: device.room ? {
            id: device.room.id,
            sector: device.room.sector,
            floor: device.room.floor,
            number: device.room.number
        } : null,
        patient: device.room?.patient ? {
            id: device.room.patient.id,
            name: device.room.patient.name
        } : null
      };
    
    
    // 3. Emita um único evento completo
    this.wsGateway.emitEvent('bpm_update', payload);
  }
}