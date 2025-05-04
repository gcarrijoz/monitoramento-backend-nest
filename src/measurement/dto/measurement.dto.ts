import { IsDateString, IsInt, IsOptional } from 'class-validator';

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