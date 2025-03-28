import {BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from 'bcrypt';
import {Song} from "../../songs/entities/song";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({unique: true})
    email!: string;
    @Column()
    password!: string;
    @Column()
    firstName!: string;
    @Column()
    lastName!: string;
    @CreateDateColumn()
    createdAt!: Date;


    @OneToMany(() => Song, (song) => song.user)
    songs?: Song[];


    @BeforeInsert()
    hasPassword = async (): Promise<void> => {
        this.password = await bcrypt.hash(this.password, 10);
    };
}