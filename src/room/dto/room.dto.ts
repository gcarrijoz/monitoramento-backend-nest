import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";


export class RoomDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsInt()
    floor: number;

    @IsString()
    sector: string;

    @IsString()
    number: string;

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;
}

export class UpdateRoomDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsOptional()
    @IsInt()
    floor?: number;

    @IsOptional()
    @IsString()
    sector?: string;

    @IsOptional()
    @IsString()
    number?: string;

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;
}