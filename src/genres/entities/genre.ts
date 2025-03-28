import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Song} from "../../songs/entities/song";


@Entity('genres')
export class Genre {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @OneToMany(() => Song, (song) => song.genre)
    songs?: Song[];
}