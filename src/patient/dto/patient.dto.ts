import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePatientDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    cpf: string;
  
    @IsString()
    @IsNotEmpty()
    gender: string;
  
    @IsDate()
    @Type(() => Date) 
    dateOfBirth: Date;

    @IsOptional()
    @IsInt()
    roomId: number;
  
    @IsNumber()
    minHeartRate: number;
  
    @IsNumber()
    maxHeartRate: number;
  
    @IsOptional()
    @IsBoolean()
    isActive: boolean = true; 
  }
  

  export class UpdatePatientDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsString()
    cpf?: string;
  
    @IsOptional()
    @IsString()
    gender?: string;
  
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    dateOfBirth?: Date;
  
    @IsOptional()
    @IsNumber()
    minHeartRate?: number;
  
    @IsOptional()
    @IsNumber()
    maxHeartRate?: number;
  
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
  }
  

  export class PatientResponseDto {
    id: number;
    name: string;
    cpf: string;
    gender: string;
    dateOfBirth: Date;
    minHeartRate: number;
    maxHeartRate: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }