import { IsBoolean, IsInt, IsOptional, IsString, IsNumber } from 'class-validator';

export class DeviceDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  macAddress: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  roomId?: number;
}

export class AssignDeviceDto {
  @IsInt()
  deviceId: number;

  @IsInt()
  roomId: number;

}
