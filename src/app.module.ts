import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import {Song} from "./songs/entities/song";
import {Genre} from "./genres/entities/genre";
import { GenresModule } from './genres/genres.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres', // Tvoj username
            password: 'fE272%sT', // Tvoje geslo
            database: 'genius', // Ime baze
            entities: [Song,Genre],
            synchronize: true, // Samodejna migracija
        }),
        SongsModule,
        GenresModule,

    ],

})
export class AppModule {}