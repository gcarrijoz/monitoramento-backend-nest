// mqtt.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { WebSocketGatewayApp } from 'src/websocket.gateway';


@Injectable()
export class MqttService implements OnModuleInit {
  private readonly logger = new Logger(MqttService.name);
  private mqttClient: mqtt.MqttClient;

  constructor(private readonly wsGateway: WebSocketGatewayApp) {}

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

      this.mqttClient.on('message', (topic, message) => {
        try {
          const data = JSON.parse(message.toString());
          this.logger.log(`📡 Dados MQTT recebidos: ${JSON.stringify(data)}`);

          const payload = {
            event: 'bpm_update',
            bpm: data.bpm,
            macAddress: data.id_dispositivo,
            timestamp: new Date().toISOString()
          };

          this.logger.log(`📤 Enviando para WebSocket: ${JSON.stringify(payload)}`);
          
          // Usando o método seguro do gateway
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