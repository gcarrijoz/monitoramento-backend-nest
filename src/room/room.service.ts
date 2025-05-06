import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RoomDto, UpdateRoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {

    constructor(private prisma: PrismaService){}

    async create(data: RoomDto) {
        const { floor, sector, number } = data;

        const existingRoom = await this.prisma.room.findUnique({
            where: { 
                floor_sector_number: {
                    floor,
                    sector,
                    number
                }
            }
        });

        if(existingRoom) {
            throw new ConflictException('Já existe um quarto com essas especificações criado');
        }

        return this.prisma.room.create({data})
    }

    async findAll(){
        return this.prisma.room.findMany();
    }

    async findOne(id: number){
        const room = await this.prisma.room.findUnique({where: {id}});

        if(!room){
            throw new NotFoundException('Quarto não encontrado');
        }

        return room;
    }

    async update(id: number, data: UpdateRoomDto){
        await this.findOne(id);

        return this.prisma.room.update({
            where: {id},
            data
        })
    }

    async delete(id: number){
        await this.findOne(id);

        await this.prisma.room.delete({where: {id}})

        return { message: 'Quarto deletado com sucesso'}
    }

    async findAvailable() {
        const availableRooms = await this.prisma.room.findMany({
            where: {
                isAvailable: true
            }
        });
    
        if (availableRooms.length === 0) {
            throw new NotFoundException('Nenhum quarto disponível no momento');
        }
    
        return availableRooms;
    }

    async listRoomsWithPatientDetails() {
        const rooms = await this.prisma.room.findMany({
          include: {
            patient: {
              select: {
                id: true,
                name: true,
                maxHeartRate: true,
                minHeartRate: true,
              },
            },
          },
          orderBy: [
            {
                patient: {
                    id: 'asc'
                },

            },
            {
                patient: {
                    name: 'asc'
                }
            }
          ]

        });
    
        return rooms;
    }

    async findRoomsWithoutDevices() {
        const roomsWithoutDevices = await this.prisma.room.findMany({
            where: {
                devices: {
                    none: {}  // Filtra quartos que não têm nenhum dispositivo relacionado
                }
            },
        });
    
        return roomsWithoutDevices;
    }
}
