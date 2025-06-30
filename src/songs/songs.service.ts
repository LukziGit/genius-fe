import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {Repository} from "typeorm";
import {CreateSongDTO} from "./entities/create-song.dto";
import {UpdateSongDTO} from "./entities/update-song.dto";
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";

    @Injectable() // da lahko vbrizga v druge razrede - npr songController
    export class SongsService {
        constructor(
            @InjectRepository(Song) // vbrizganje entitete Song
            private readonly songRepository: Repository<Song>, //TypeOrm objekt, ki omogoča create, find...
            private readonly userService: UsersService,
        ) {}
    async findAll(): Promise<Song[]> {
        return this.songRepository.find();
    }
    async findOne(id:number): Promise<Song | null> {

        return await this.songRepository.findOne({where: {id}})
    }
    //TUKAJ DODATKI PO USERID
    async create(createSongDTO: CreateSongDTO, userId: number, imagePath?: string): Promise<Song> {

        const user = await this.userService.findById(userId) // user glede na ID
        if (!user) { // prever ce je user null
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
        const newSong = this.songRepository.create({ ...createSongDTO, user, coverImagePath: imagePath || undefined}); //spread operator zdruzuje user in createSongDTO
        return this.songRepository.save(newSong);
    }

        async update(
            id: number,
            updateSongDTO: UpdateSongDTO,
            userId: number,
            imagePath?: string
        ): Promise<Song> {
            const song = await this.songRepository.findOne({
                where: { id },
                relations: ['user'],
            });

            if (!song) {
                throw new NotFoundException(`Song with id ${id} not found`);
            }

            if (song.user.id !== userId) {
                throw new UnauthorizedException('Nimate dovoljenja za urejanje te pesmi');
            }

            // Posodobi podatke iz DTO in opcijsko tud pot slike - bascily kopira lasnosti updateSongDTO v song
            Object.assign(song, updateSongDTO);
            if (imagePath) {
                song.coverImagePath = imagePath;
            }

            await this.songRepository.save(song);
            return song;
        }




        async delete(id: number): Promise<void> {
        await this.songRepository.delete(id);
    }
}
