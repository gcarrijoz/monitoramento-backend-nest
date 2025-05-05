import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { WebSocketGatewayApp } from 'src/websocket.gateway';
import { MeasurementService } from 'src/measurement/measurement.service';
import { PrismaService } from 'src/database/prisma.service';


@Module({
  providers: [WebSocketGatewayApp, MqttService, MeasurementService, PrismaService],
  controllers: [MqttController],
  exports: [MqttService],
})
export class MqttModule {}