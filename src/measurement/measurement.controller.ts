import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { MeasurementService } from './measurement.service';
import { CreateMeasurementDto, UpdateMeasurementDto } from './dto/measurement.dto';

@UseGuards(JwtAuthGuard)
@Controller('measurement')
export class MeasurementController {
    constructor(private readonly measurementService: MeasurementService) {}

    @Post()
    async create(@Body() data: CreateMeasurementDto) {
        return this.measurementService.create(data);
    }

    @Get()
    async findAll() {
        return this.measurementService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.measurementService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: UpdateMeasurementDto
        ) {
        return this.measurementService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.measurementService.delete(id);
    }
}