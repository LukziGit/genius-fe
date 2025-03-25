import {IsDateString, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateSongDTO {
    @IsOptional()
    @IsString()
    title?: string;
    @IsOptional()
    @IsString()
    lyrics?: string;
    @IsOptional()
    @IsDateString()
    releaseDate?: string;
    @IsOptional()
    @IsNumber()
    genre_Id?: number;
}