import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import {Song} from "./songs/entities/song";
import {Genre} from "./genres/entities/genre";
import { GenresModule } from './genres/genres.module';
import { ArtistsService } from './artists/artists.service';
import { ArtistsModule } from './artists/artists.module';
import {Artist} from "./artists/entities/artist";
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import process from "node:process";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST || 'localhost',
            port: Number(process.env.DATABASE_PORT || 5432),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [Song,Genre,Artist, User],
            synchronize: true, // Samodejna migracija
        }),
        SongsModule,
        GenresModule,
        ArtistsModule,
        UsersModule,
        AuthModule,
    ],

})
export class AppModule {}