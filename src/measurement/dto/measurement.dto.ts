import { IsDateString, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMeasurementDto {
  @IsInt()
  bpm: number;

  @IsInt()
  sensorId: number;

  @IsInt()
  patientId: number;

  @IsOptional()
  @IsDateString()
  recordedAt?: Date;
}

export class UpdateMeasurementDto {
  @IsOptional()
  @IsInt()
  bpm?: number;
}


export class EspMeasurementDto {
  @IsInt()
  bpm: number;

  @IsString()
  id_dispositivo: string;

  @IsNumber()
  timestamp: number;
}