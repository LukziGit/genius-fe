import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {Song} from "./entities/song";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) {}

    @Get()
    async findAll(): Promise<Song[]> {
        return this.songService.findAll();
    }
    @Post()
    async create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
        console.log('test');
        return this.songService.create(createSongDTO);
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
