import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateMeasurementDto, UpdateMeasurementDto } from './dto/measurement.dto';

@Injectable()
export class MeasurementService {
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
}