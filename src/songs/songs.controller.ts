import {Controller, Get} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {Song} from "./entities/song";

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) {}

    @Get()
    async findAll(): Promise<Song[]> {
        return this.songService.findAll();
    }

}
