import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {GenresService} from "./genres.service";
import {Genre} from "./entities/genre";

@Controller('genres')
export class GenresController {
    constructor(private readonly genreService: GenresService) {}
    @Get()
    async findAll(): Promise<Genre[]> {
        return this.genreService.findAll();
    }
    @Post()
    async create(@Body('name') name: string): Promise<Genre> {
        return this.genreService.create(name);
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body('name') name: string): Promise<Genre> {
        return this.genreService.update(+id, name);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.genreService.delete(+id);
    }
}
