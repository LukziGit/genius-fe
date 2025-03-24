import { IsDateString, IsString } from 'class-validator';

export class CreateSongDTO {
    @IsString()
    title!: string;

    @IsString()
    lyrics!: string;

    @IsDateString()
    releaseDate?: string;
}
