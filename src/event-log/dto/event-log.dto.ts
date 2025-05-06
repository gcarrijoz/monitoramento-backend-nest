import { IsInt, IsNotEmpty, IsString, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateEventLogDto {
  @IsInt()
  @IsNotEmpty()
  sensorId: number;

  @IsInt()
  @IsOptional()
  roomId: number;

  @IsInt()
  @IsOptional()
  patientId: number;

  @IsString()
  @IsNotEmpty()
  eventDescription: string;

  @IsOptional()
  @IsDate()
  eventTimestamp?: Date;
}


export class CreateEventFromEspDto {
    @IsString()
    id_dispositivo: string;  

    @IsString()
    @IsOptional()
    macAddress?: string;

    @IsInt()
    @IsOptional()
    bpm?: number;

    @IsNumber()
    @IsOptional()
    timestamp?: number;

    @IsString()
    eventType: string;

    @IsString()
    description: string;
}