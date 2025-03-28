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
    createdAt?: Date;
    @Column({ name: 'genre_id' })
    genreId!: number;
    @ManyToOne(() => Genre, (genre) => genre.songs, {nullable: false    })
    @JoinColumn({ name: 'genre_id' })
    genre!: Genre;
    /*
    {
    JSON, pravilen
  "title": "Lose Yourself",
  "lyrics": "You better lose yourself in the music, the moment...",
  "releaseDate": "2002-10-28",
  "genreId":2
}
     */
}