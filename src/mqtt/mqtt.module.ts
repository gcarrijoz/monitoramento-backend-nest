import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { WebSocketGatewayApp } from 'src/websocket.gateway';


@Module({
  providers: [WebSocketGatewayApp, MqttService],
  controllers: [MqttController],
  exports: [MqttService],
})
export class MqttModule {}