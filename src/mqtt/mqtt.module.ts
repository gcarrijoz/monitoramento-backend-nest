import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { WebSocketGatewayApp } from 'src/websocket.gateway';
import { MeasurementService } from 'src/measurement/measurement.service';
import { PrismaService } from 'src/database/prisma.service';
import { EventLogService } from 'src/event-log/event-log.service';
import { DeviceService } from 'src/device/device.service';


@Module({
  providers: [WebSocketGatewayApp, MqttService, MeasurementService, PrismaService, EventLogService, DeviceService],
  controllers: [MqttController],
  exports: [MqttService],
})
export class MqttModule {}