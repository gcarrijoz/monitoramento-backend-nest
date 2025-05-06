import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EventLogService } from './event-log.service';

@Module({
    providers: [PrismaService, EventLogService]
})
export class EventLogModule {}
