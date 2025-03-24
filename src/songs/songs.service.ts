import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {Repository} from "typeorm";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";

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
    async update(id: number, updateSongDTO: UpdateSongDTO): Promise<Song> {
        const song = await this.songRepository.findOne({ where: { id } });
        if (!song) {
            throw new NotFoundException(`Song with id ${id} not found`);
        }
        await this.songRepository.update(id, updateSongDTO);
        const updatedSong = await this.songRepository.findOne({ where: { id } });
        if (!updatedSong) {
            throw new NotFoundException(`Updated song with id ${id} not found`);
        }
        return updatedSong;
    }



    async delete(id: number): Promise<void> {
        await this.songRepository.delete(id);
    }
}
