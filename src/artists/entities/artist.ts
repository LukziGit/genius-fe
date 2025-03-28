import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Song} from "../../songs/entities/song";

@Entity('artists')
export class Artist {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column() // OBVEZNO polje – name mora biti v requestu!
    name!: string;

    @Column({ nullable: true })
    bio?: string;

    @Column({ type: 'date', nullable: true })
    birthDate?: Date;

    @Column({ nullable: true })
    country?: string;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Song, (song) => song.artist)
    songs?: Song[];
}
