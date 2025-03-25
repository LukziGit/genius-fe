import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn
} from 'typeorm';
import {Genre} from "../../genres/entities/genre";


@Entity('songs')
export class Song {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    lyrics!: string;
    @Column()
    releaseDate?: Date;
    @CreateDateColumn()
    createdAt!: Date;
    @ManyToOne(() => Genre, (genre) => genre.songs, {nullable: false})
    @JoinColumn({ name: 'genre_id' })
    genre!: Genre;
}