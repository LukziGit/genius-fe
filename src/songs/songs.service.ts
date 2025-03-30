import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {Repository} from "typeorm";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private readonly songRepository: Repository<Song>,
        private readonly userService: UsersService,
    ) {}
    async findAll(): Promise<Song[]> {
        return this.songRepository.find();
    }
    async findOne(id:number): Promise<Song | null> {

        return await this.songRepository.findOne({where: {id}})
    }
    async create(createSongDTO: CreateSongDTO, userId: number): Promise<Song> {

        const user = await this.userService.findById(userId) // user glede na ID
        if (!user) { // prever ce je user null
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
        const newSong = this.songRepository.create({ ...createSongDTO, user});
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
