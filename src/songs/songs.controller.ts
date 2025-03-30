import {Body, Controller, Delete, Get, Param, Patch, Post, UnauthorizedException, UseGuards} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {Song} from "./entities/song";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Request } from 'express';
import { Req } from '@nestjs/common';

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
    async create(@Body() createSongDTO: CreateSongDTO, @Req() req:any): Promise<Song> {


        return this.songService.create(createSongDTO, req.user.userId);
    }
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateSongDTO: UpdateSongDTO,
    ): Promise<Song> {
        return this.songService.update(+id, updateSongDTO);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        this.songService.delete(+id);
    }

}
