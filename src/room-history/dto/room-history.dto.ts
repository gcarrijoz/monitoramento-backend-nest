import { IsDateString, IsInt, IsOptional } from 'class-validator';

export class CreateRoomHistoryDto {
  @IsInt()
  roomId: number;

  @IsInt()
  patientId: number;

  @IsOptional()
  @IsDateString()
  entryDate?: Date;
}

export class UpdateRoomHistoryDto {
  @IsOptional()
  @IsDateString()
  exitDate?: Date;
}