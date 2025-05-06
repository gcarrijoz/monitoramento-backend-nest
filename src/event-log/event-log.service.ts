// src/event-log/event-log.service.ts
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateEventFromEspDto } from './dto/event-log.dto';


@Injectable()
export class EventLogService {
  private readonly logger = new Logger(EventLogService.name);

  constructor(private prisma: PrismaService) {}

  async createFromEsp(data: CreateEventFromEspDto) {
    const device = await this.prisma.device.findUnique({
      where: { macAddress: data.id_dispositivo },
      include: {
        room: {
          include: { patient: true }
        }
      }
    });

    if (!device) {
      this.logger.warn(`Dispositivo ${data.id_dispositivo} não encontrado`);
    }
    
    const eventLogData = {
      macAddress: data.id_dispositivo,
      sensorId: device?.id ?? null,
      roomId: device?.room?.id ?? null,
      patientId: device?.room?.patient?.id ?? null,
      eventDescription: `${data.eventType}: ${data.description}`,
      eventTimeStamp: data.timestamp !== undefined ? new Date(data.timestamp * 1000) : new Date(),
    };
  
  
    return this.prisma.eventLog.create({
      data: eventLogData,
      include: {
        sensor: true,
        patient: { include: { room: true } }
      }
    });
  }
}
