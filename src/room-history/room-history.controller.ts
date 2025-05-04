import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoomHistoryService } from './room-history.service';
import { CreateRoomHistoryDto, UpdateRoomHistoryDto } from './dto/room-history.dto';

@UseGuards(JwtAuthGuard)
@Controller('room-history')
export class RoomHistoryController {
  constructor(private readonly roomHistoryService: RoomHistoryService) {}

  @Post()
  async create(@Body() data: CreateRoomHistoryDto) {
    return this.roomHistoryService.create(data);
  }

  @Get()
  async findAll() {
    return this.roomHistoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.roomHistoryService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRoomHistoryDto
  ) {
    return this.roomHistoryService.update(id, data);
  }

  @Put('exit/patient/:patientId')
  async exitByPatient(@Param('patientId', ParseIntPipe) patientId: number) {
      return this.roomHistoryService.registerExitByPatient(patientId);
  }

  @Put('exit/room/:roomId')
  async exitByRoom(@Param('roomId', ParseIntPipe) roomId: number) {
      return this.roomHistoryService.registerExitByRoom(roomId);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.roomHistoryService.delete(id);
  }
}