import {BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from 'bcrypt';


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

    @BeforeInsert()
    hasPassword = async (): Promise<void> => {
        this.password = await bcrypt.hash(this.password, 10);
    };
}