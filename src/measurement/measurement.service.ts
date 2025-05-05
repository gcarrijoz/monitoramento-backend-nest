import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateMeasurementDto, EspMeasurementDto, UpdateMeasurementDto } from './dto/measurement.dto';

@Injectable()
export class MeasurementService {
    private readonly logger = new Logger(MeasurementService.name);

    constructor(private prisma: PrismaService) {}

    async create(data: CreateMeasurementDto) {
        const device = await this.prisma.device.findUnique({
            where: { id: data.sensorId }
        });
        if (!device) {
        throw new NotFoundException(`Device com ID ${data.sensorId} não encontrado`);
        }
    
        const patient = await this.prisma.patient.findUnique({
        where: { id: data.patientId }
        });
        if (!patient) {
        throw new NotFoundException(`Paciente com ID ${data.patientId} não encontrado`);
        }

        return this.prisma.measurement.create({
            data: {
            bpm: data.bpm,
            sensor: { connect: { id: data.sensorId } },
            patient: { connect: { id: data.patientId } },
            recordedAt: data.recordedAt || new Date()
            }
        });

    }

    async findAll() {
        return this.prisma.measurement.findMany({
            include: {
            sensor: true,
            patient: true
            }
        });
    }

    async findOne(id: number) {
        const measurement = await this.prisma.measurement.findUnique({
            where: { id },
            include: { sensor: true, patient: true }
        });

        if (!measurement) {
            throw new NotFoundException('Medição não encontrada');
        }

        return measurement;
    }

    async update(id: number, data: UpdateMeasurementDto) {
        await this.findOne(id);
        return this.prisma.measurement.update({
            where: { id },
            data
        });
    }

    async delete(id: number) {
        await this.findOne(id);
        await this.prisma.measurement.delete({ where: { id } });
        return { message: 'Medição removida com sucesso' };
    }

    async createFromEsp(data: EspMeasurementDto) {
        const device = await this.prisma.device.findUnique({
          where: { macAddress: data.id_dispositivo },
          include: {
            room: {
              include: {
                patient: true
              }
            }
          }
        });
    
        if (!device) {
          this.logger.warn(`Dispositivo ${data.id_dispositivo} não encontrado`);
          throw new NotFoundException(`Dispositivo ${data.id_dispositivo} não encontrado`);
        }
    
        if (!device.room?.patient) {
          this.logger.warn(`Nenhum paciente no quarto do dispositivo ${data.id_dispositivo}`);
          throw new NotFoundException('Nenhum paciente associado a este dispositivo');
        }
    
        const patient = device.room.patient;
    
        return this.prisma.measurement.create({
          data: {
            bpm: data.bpm,
            sensor: { connect: { id: device.id } },
            patient: { connect: { id: patient.id } },
            recordedAt: new Date(data.timestamp * 1000) 
          },
          include: {
            sensor: true,
            patient: {
              include: {
                room: true
              }
            }
          }
        });
    }
}