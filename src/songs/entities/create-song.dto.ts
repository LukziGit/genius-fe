import {IsDateString, IsNumber, IsOptional, IsString} from 'class-validator';
import {Type} from "class-transformer";
import {CreateDateColumn} from "typeorm";

export class CreateSongDTO {
    @IsString()
    title!: string;

    @IsString()
    lyrics!: string;

    @IsDateString()
    releaseDate!: string;

    @IsNumber()
    genreId!: number;
}
