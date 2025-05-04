import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { DeviceService } from './device.service';
import { AssignDeviceDto, DeviceDto } from './dto/device.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('device')
export class DeviceController {

    constructor(private readonly deviceService: DeviceService){}
    
    @Post()
    async create(@Body() data: DeviceDto){
        try {
            return await this.deviceService.create(data);
        } catch (error) {
            if (error instanceof ConflictException){
                throw error;
            }
            throw new ConflictException('Erro ao criar dispositivo')
        }
    }

    @Get()
    async index() {
        return this.deviceService.findAll();
    }

    @Get('/with-rooms')
    async listAllPatients() {
        return this.deviceService.listDevicesWithRoomDetails();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.deviceService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DeviceDto>) {
        return this.deviceService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.deviceService.delete(id);
    }

    @Post('/assignment')
    async assignToRoom(
        @Body() data: AssignDeviceDto
    ) {
        try {
            return await this.deviceService.assignDeviceToRoom(data.deviceId, data.roomId);
        } catch (error) {
            if (error instanceof NotFoundException || error instanceof ConflictException) {
                throw error;
            }
            throw new ConflictException('Erro ao atribuir dispositivo ao quarto');
        }
    }

    @Post('/unassign/:deviceId')
    async unassignFromRoom(
        @Param('deviceId', ParseIntPipe) deviceId: number
    ) {
        try {
            return await this.deviceService.unassignDevice(deviceId);
        } catch (error) {
            if (error instanceof NotFoundException || error instanceof ConflictException) {
                throw error;
            }
            throw new ConflictException('Erro ao desvincular dispositivo');
        }
    }
}
