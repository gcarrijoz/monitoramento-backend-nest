import { Body, ConflictException, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { PatientService } from './patient.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';

@UseGuards(JwtAuthGuard)
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService){}

    @Post()
    async create(@Body() data: CreatePatientDto){
        try {
            return await this.patientService.create(data);
        } catch (error) {
            if (error instanceof ConflictException){
                throw error;
            }
            throw new ConflictException('Erro ao criar paciente')
        }
    }

    @Get('unassigned')
    async findUnassigned() {
        return this.patientService.findUnassigned();
    }

    @Get()
    async index() {
        return this.patientService.findAll();
    }

    @Get('/with-rooms')
    async listAllPatients() {
        return this.patientService.listPatientsWithRoomDetails();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.patientService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePatientDto) {
        return this.patientService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.patientService.delete(id);
    }
}
