import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';


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
}