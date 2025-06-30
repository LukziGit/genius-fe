import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UnauthorizedException, UploadedFile,
    UseGuards,
    UseInterceptors

} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {Song} from "./entities/song";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Request } from 'express';
import { Req } from '@nestjs/common';
import AuthRequest from "../auth/auth-request.interface";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { extname } from 'path';


//Sprejema in obravnava HTTP requeste
@Controller('songs')
@UseGuards(JwtAuthGuard)
export class SongsController {
    constructor(private readonly songService: SongsService) {}

    @Get()
    async findAll(): Promise<Song[]> {
        return this.songService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Song | null> {
        return this.songService.findOne(+id);
    }
    @Post()
    @UseInterceptors(FileInterceptor('cover', {
       // dest: './uploads/covers', // kam se shrani slika

        storage: diskStorage({
            destination: './uploads/covers',
            filename: (req, file, cb) => {
                const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const extension = extname(file.originalname);  // doda .png / .jpg
                cb(null, uniqueName + extension);
            },
        })
    }))
    async create(@Body() createSongDTO: CreateSongDTO, @Req() req:any, @UploadedFile() file:Express.Multer.File): Promise<Song> {
        console.log("req.user:", req.user);
        const imagePath = file ? `/uploads/covers/${file.filename}` : undefined;

        return this.songService.create(createSongDTO, req.user.userId, imagePath);
    }





    @Patch(':id')
    @UseInterceptors(FileInterceptor('cover', { //obdelava datoteke z imenom cover
        storage: diskStorage({ //shrani datoteko na disk
            destination: './uploads/covers', //Kam se datoteka shrani
            filename: (req, file, cb) => {
                const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`; // ime datoteke
                const extension = extname(file.originalname); //Ustvari naključno, časovno osnovano ime, npr. 1749384804854-123456789
                cb(null, uniqueName + extension); // doda priponko kot png...
            },
        })
    }))
    async update(
        @Param('id') id: string,
        @Body() updateSongDTO: UpdateSongDTO,
        /*Tukaj je testni del*/
        @Req() req: AuthRequest,
        @UploadedFile() cover: Express.Multer.File
        /*------*/
    ): Promise<Song> {
        /* Tukaj je tudi testni del req.user['userId*/
        const imagePath = cover ? `/uploads/covers/${cover.filename}` : undefined;
        return this.songService.update(+id, updateSongDTO, req.user['userId'],imagePath);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        this.songService.delete(+id);
    }

}
