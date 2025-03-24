import {IsDateString, IsOptional, IsString} from 'class-validator';

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
}