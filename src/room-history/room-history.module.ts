import { Module } from '@nestjs/common';
import { RoomHistoryService } from './room-history.service';
import { PrismaService } from 'src/database/prisma.service';
import { RoomHistoryController } from './room-history.controller';

@Module({
    providers: [RoomHistoryService, PrismaService],
    controllers: [RoomHistoryController]
})
export class RoomHistoryModule {}
