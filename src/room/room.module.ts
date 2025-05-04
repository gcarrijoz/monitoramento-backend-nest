import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { PrismaService } from 'src/database/prisma.service';
import { RoomController } from './room.controller';

@Module({
    providers: [RoomService, PrismaService],
    controllers: [RoomController]
})
export class RoomModule {}
