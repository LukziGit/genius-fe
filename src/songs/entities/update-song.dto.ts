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
    @IsOptional()
    @IsNumber()
    artist_Id?: number;
    /*
    @IsOptional()
    @IsNumber()
    user_Id?: number;

     */
    @IsOptional()
    @IsString()
    coverImagePath?: string;
}