import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';

@Injectable()
export class PatientService {
    
    constructor(private prisma: PrismaService){}

    async create(data: CreatePatientDto) {
        const existingPatient = await this.prisma.patient.findUnique({
            where: { cpf: data.cpf}
        });

        if(existingPatient) {
            throw new ConflictException('Esse CPF já está cadastrado');
        }

        return this.prisma.patient.create({data})
    }

    async findAll(){
        return this.prisma.patient.findMany();
    }

    async findOne(id: number){
        const patient = await this.prisma.patient.findUnique({where: {id}});

        if(!patient){
            throw new NotFoundException('Paciente não encontrado');
        }

        return patient;
    }

    async update(id: number, data: UpdatePatientDto){
        await this.findOne(id);

        return this.prisma.patient.update({
            where: {id},
            data
        })
    }

    async delete(id: number){
        await this.findOne(id);

        await this.prisma.patient.delete({where: {id}})

        return { message: 'Paciente deletado com sucesso'}
    }

    async findUnassigned() {
        const patientsWithActiveStay = await this.prisma.roomHistory.findMany({
            where: { exitDate: null },
            select: { patientId: true }
        });
        
        const activePatientIds = patientsWithActiveStay.map(stay => stay.patientId);
        
        return this.prisma.patient.findMany({
            where: {
                id: { notIn: activePatientIds },
                isActive: true
            }
        });
    }

    async listPatientsWithRoomDetails() {
        const patients = await this.prisma.patient.findMany({
          include: {
            room: {
              select: {
                sector: true,
                floor: true,
                number: true,
              },
            },
          },
          orderBy: {
            name: 'asc'
          },
        });
    
        return patients;
    }
}
