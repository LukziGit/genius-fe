import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {Repository} from "typeorm";

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private readonly songRepository: Repository<Song>,
    ) {}
    async findAll(): Promise<Song[]> {
        return this.songRepository.find();
    }
}
