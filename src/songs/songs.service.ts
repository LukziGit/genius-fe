import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {Repository} from "typeorm";
import {CreateSongDTO} from "./entities/create-song.dto";

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private readonly songRepository: Repository<Song>,
    ) {}
    async findAll(): Promise<Song[]> {
        return this.songRepository.find();
    }
    async create(createSongDTO: CreateSongDTO): Promise<Song> {
        const newSong = this.songRepository.create(createSongDTO);
        return this.songRepository.save(newSong);
    }
}
