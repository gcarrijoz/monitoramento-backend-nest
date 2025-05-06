// mqtt.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { MeasurementService } from 'src/measurement/measurement.service';
import { WebSocketGatewayApp } from 'src/websocket.gateway';


@Injectable()
export class MqttService implements OnModuleInit {
  private readonly logger = new Logger(MqttService.name);
  private mqttClient: mqtt.MqttClient;

  constructor(private readonly wsGateway: WebSocketGatewayApp, private readonly measurementService: MeasurementService) {}

  async onModuleInit() {
    await this.connectToMqtt();
  }

  private async connectToMqtt() {
    try {
      this.mqttClient = mqtt.connect('mqtt://192.168.1.111');

      this.mqttClient.on('connect', () => {
        this.logger.log('Conectado ao Broker MQTT');
        this.mqttClient.subscribe('dados_bpm');
      });

      this.mqttClient.on('message', async (topic, message) => {
        try {
          const rawData = JSON.parse(message.toString());
          this.logger.log(`📡 Dados MQTT recebidos: ${JSON.stringify(rawData)}`);

          const measurement = await this.measurementService.createFromEsp({
            bpm: rawData.bpm,
            id_dispositivo: rawData.id_dispositivo,
            timestamp: rawData.timestamp
          });

          const payload = {
            event: 'bpm_update',
            bpm: measurement.bpm,
            macAddress: measurement.sensor.macAddress,
            room: measurement.patient.room 
              ? `${measurement.patient.room.sector}-${measurement.patient.room.floor}-${measurement.patient.room.number}`
              : 'Desconhecido',
            patient: {
              name: measurement.patient.name,
              cpf: measurement.patient.cpf
            },
            deviceTimestamp: rawData.timestamp,
            serverTimestamp: new Date().toISOString()
          };
          

          this.logger.log(`📤 Enviando para WebSocket: ${JSON.stringify(payload)}`);
          
          this.wsGateway.emitEvent('bpm_update', payload);

        } catch (error) {
          this.logger.error('Erro ao processar mensagem:', error);
        }
      });

      this.mqttClient.on('error', (error) => {
        this.logger.error('Erro na conexão MQTT:', error);
      });

    } catch (error) {
      this.logger.error('Falha ao conectar ao MQTT:', error);
    }
  }
}