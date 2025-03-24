import {Body, Controller, Get, Post} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {Song} from "./entities/song";
import {CreateSongDTO} from "./entities/create-song.dto";

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) {}

    @Get()
    async findAll(): Promise<Song[]> {
        return this.songService.findAll();
    }
    @Post()
    async create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
        return this.songService.create(createSongDTO);
    }

}
