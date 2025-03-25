import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Genre} from "./entities/genre";
import {Repository} from "typeorm";

@Injectable()
export class GenresService {
    constructor(
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>,
    ) {}
    async findAll(): Promise<Genre[]> {
        return this.genreRepository.find();
    }

    async create(name: string): Promise<Genre> {
        const genre =  this.genreRepository.create({ name:name })
        return await this.genreRepository.save(genre)
    }

    async delete(id: number): Promise<void> {
        await this.genreRepository.delete(id);
    }
    async update(id: number, name: string): Promise<Genre> {
        const genre = await this.genreRepository.findOne({where: {id: id}});
        genre!.name = name;
        return this.genreRepository.save(genre!);
    }


}
