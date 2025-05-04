import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DeviceService } from './device/device.service';
import { DeviceController } from './device/device.controller';
import { DeviceModule } from './device/device.module';
import { PrismaService } from './database/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomModule } from './room/room.module';
import { PatientController } from './patient/patient.controller';
import { PatientModule } from './patient/patient.module';
import { PatientService } from './patient/patient.service';
import { RoomHistoryController } from './room-history/room-history.controller';
import { RoomHistoryService } from './room-history/room-history.service';
import { RoomHistoryModule } from './room-history/room-history.module';
import { MeasurementController } from './measurement/measurement.controller';
import { MeasurementService } from './measurement/measurement.service';
import { MeasurementModule } from './measurement/measurement.module';
import { MqttModule } from './mqtt/mqtt.module';
import { WebSocketGatewayApp } from './websocket.gateway';


@Module({
  imports: [UserModule, DeviceModule, ConfigModule.forRoot(), RoomModule, PatientModule, RoomHistoryModule, MeasurementModule, MqttModule],
  controllers: [AppController, UserController, DeviceController, RoomController, PatientController, RoomHistoryController, MeasurementController],
  providers: [AppService, UserService, DeviceService, PrismaService, RoomService, PatientService, RoomHistoryService, MeasurementService, WebSocketGatewayApp],
})

export class AppModule {}
