import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeviceDto } from './dto/device.dto';

@Injectable()
export class DeviceService {

    constructor(private prisma: PrismaService){}

    async create (data: DeviceDto) {
        const existingDevice = await this.prisma.device.findUnique({
            where: { macAddress: data.macAddress}
        });

        if(existingDevice) {
            throw new ConflictException('Já existe um dispositivo com este MAC Address');
        }

        return this.prisma.device.create({data})
    }

    async findAll(){
        return this.prisma.device.findMany();
    }

    async findOne(id: number){
        const device = await this.prisma.device.findUnique({where: {id}});

        if(!device){
            throw new NotFoundException('Dispositivo não encontrado');
        }

        return device
    }

    async update(id: number, data: Partial<DeviceDto>){
        await this.findOne(id);

        return this.prisma.device.update({
            where: {id},
            data
        })
    }

    async delete(id: number){
        await this.findOne(id);

        await this.prisma.device.delete({where: {id}})

        return { message: 'Dispositivo deletado com sucesso'}
    }

    async listDevicesWithRoomDetails() {
        const devices = await this.prisma.device.findMany({
          include: {
            room: {
              select: {
                sector: true,
                floor: true,
                number: true,
              },
            },
          }
        });
    
        return devices;
    }

    async assignDeviceToRoom(deviceId: number, roomId: number) {
        // Verificar se o dispositivo existe
        const device = await this.findOne(deviceId);
        
        // Verificar se o quarto existe
        const room = await this.prisma.room.findUnique({
            where: { id: roomId }
        });
        
        if (!room) {
            throw new NotFoundException('Quarto não encontrado');
        }

        // Verificar se o dispositivo já está atribuído a algum quarto
        if (device.roomId) {
            throw new ConflictException('Este dispositivo já está atribuído a um quarto');
        }

        // Atualizar o dispositivo com o roomId
        return this.prisma.device.update({
            where: { id: deviceId },
            data: { roomId }
        });
    }


    async unassignDevice(deviceId: number) {
        // Verificar se o dispositivo existe
        const device = await this.findOne(deviceId);

        // Verificar se o dispositivo está atribuído a algum quarto
        if (!device.roomId) {
            throw new ConflictException('Este dispositivo não está atribuído a nenhum quarto');
        }

        // Remover a atribuição definindo roomId como null
        return this.prisma.device.update({
            where: { id: deviceId },
            data: { roomId: null }
        });
    }


}
