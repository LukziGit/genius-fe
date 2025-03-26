import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateArtistDto {
    @IsOptional()
    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsDateString()
    birthDate?: string;

    @IsOptional()
    @IsString()
    country?: string;
}
