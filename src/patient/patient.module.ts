import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PrismaService } from 'src/database/prisma.service';
import { PatientController } from './patient.controller';

@Module({
  providers: [PatientService, PrismaService],
  controllers: [PatientController]
})
export class PatientModule {}
