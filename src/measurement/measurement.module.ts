import { Module } from '@nestjs/common';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    providers: [MeasurementService, PrismaService],
    controllers: [MeasurementController]
})
export class MeasurementModule {}
