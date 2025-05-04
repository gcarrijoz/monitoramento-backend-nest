import { Body, ConflictException, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { RoomDto, UpdateRoomDto } from './dto/room.dto';
import { RoomService } from './room.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('room')
export class RoomController {

    constructor(private readonly roomService: RoomService){}

    @Post()
    async create(@Body() data: RoomDto){
        try {
            return await this.roomService.create(data);
        } catch (error) {
            if (error instanceof ConflictException){
                throw error;
            }
            throw new ConflictException('Erro ao criar quarto')
        }
    }

    @Get('/with-patients')
    async listAllPatients() {
        return this.roomService.listRoomsWithPatientDetails();
    }

    @Get('available')
    async findAvailable() {
        return this.roomService.findAvailable();
    }
    
    @Get()
    async index() {
        return this.roomService.findAll();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.roomService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRoomDto) {
        return this.roomService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.roomService.delete(id);
    }

   
}
