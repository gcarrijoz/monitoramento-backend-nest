import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRoomHistoryDto, UpdateRoomHistoryDto } from './dto/room-history.dto';

@Injectable()
export class RoomHistoryService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateRoomHistoryDto) {
        return await this.prisma.$transaction(async (prisma) => {
            const room = await prisma.room.findUnique({
                where: { id: data.roomId },
                select: { isAvailable: true }
            });
            
            if (!room) {
                throw new NotFoundException(`Quarto com ID ${data.roomId} não encontrado`);
            }
            
            if (!room.isAvailable) {
                throw new ConflictException('Quarto já está ocupado');
            }
    
            const patient = await prisma.patient.findUnique({
                where: { id: data.patientId },
                select: { id: true, roomId: true}
            });
            
            if (!patient) {
                throw new NotFoundException(`Paciente com ID ${data.patientId} não encontrado`);
            }

            if (patient.roomId) {
                throw new ConflictException('Paciente já está alocado em outro quarto');
            }
    
            const activeStay = await prisma.roomHistory.findFirst({
                where: {
                    patientId: data.patientId,
                    exitDate: null
                },
                select: { id: true } 
            });
    
            if (activeStay) {
                throw new ConflictException('Paciente já está alocado em outro quarto');
            }
    
            const [roomHistory] = await Promise.all([
                prisma.roomHistory.create({
                    data: {
                        roomId: data.roomId,
                        patientId: data.patientId,
                        entryDate: data.entryDate || new Date()
                    }
                }),
                prisma.room.update({
                    where: { id: data.roomId },
                    data: { isAvailable: false }
                }),
                prisma.patient.update({
                    where: {id: data.patientId},
                    data: {roomId: data.roomId}
                })
            ]);
    
            return roomHistory;
        });
    }

    async findAll() {
        return this.prisma.roomHistory.findMany({
            include: {
            room: true,
            patient: true
            }
        });
    }

    async findOne(id: number) {
        const history = await this.prisma.roomHistory.findUnique({
            where: { id },
            include: { room: true, patient: true }
        });

        if (!history) {
            throw new NotFoundException('Registro de histórico não encontrado');
        }

        return history;
    }

    async update(id: number, data: UpdateRoomHistoryDto) {
        return await this.prisma.$transaction(async (prisma) => {
            const history = await prisma.roomHistory.findUnique({
                where: { id },
                include: { room: true }
            });
    
            if (!history) {
                throw new NotFoundException('Registro de histórico não encontrado');
            }
    
            // Se estiver registrando a saída
            if (data.exitDate && !history.exitDate) {
                await prisma.room.update({
                    where: { id: history.roomId },
                    data: { isAvailable: true }
                });
            }
    
            return prisma.roomHistory.update({
                where: { id },
                data: {
                    exitDate: data.exitDate || new Date()
                }
            });
        });
    }

    async delete(id: number) {
        await this.findOne(id);
        await this.prisma.roomHistory.delete({ where: { id } });
        return { message: 'Histórico removido com sucesso' };
    }

    async registerExitByPatient(patientId: number) {
        return await this.prisma.$transaction(async (prisma) => {
            const activeStay = await prisma.roomHistory.findFirst({
                where: {
                    patientId,
                    exitDate: null
                },
                include: { room: true }
            });
    
            if (!activeStay) {
                throw new NotFoundException('Nenhuma estadia ativa encontrada para este paciente');
            }
    
            const [updatedHistory] = await Promise.all([
                prisma.roomHistory.update({
                    where: { id: activeStay.id },
                    data: {
                        exitDate: new Date()
                    }
                }),
                prisma.room.update({
                    where: { id: activeStay.roomId },
                    data: { isAvailable: true }
                }),
                prisma.patient.update({
                    where: { id: patientId },
                    data: { roomId: null } 
                })
            ]);
    
            return updatedHistory;
        });
    }

    async registerExitByRoom(roomId: number) {
        return await this.prisma.$transaction(async (prisma) => {
            const activeStay = await prisma.roomHistory.findFirst({
                where: {
                    roomId,
                    exitDate: null
                }
            });
    
            if (!activeStay) {
                throw new NotFoundException('Nenhuma estadia ativa encontrada para este quarto');
            }
    
            const [updatedHistory] = await Promise.all([
                prisma.roomHistory.update({
                    where: { id: activeStay.id },
                    data: {
                        exitDate: new Date()
                    }
                }),
                prisma.room.update({
                    where: { id: roomId },
                    data: { isAvailable: true }
                }),
                prisma.patient.update({
                    where: { id: activeStay.patientId },
                    data: { roomId: null } // Limpa o roomId do paciente
                })
            ]);
    
            return updatedHistory;
        });
    }
}