import {IsDateString, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateArtistDto {
    @IsOptional()
    @IsString()
    name!: string;
    @IsOptional()
    @IsString()
    bio?: string;
    @IsOptional()
    @IsDateString()
    birthDate?: Date;
    @IsOptional()
    @IsString()
    country?: string;
}