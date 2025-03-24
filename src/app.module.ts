import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import {Song} from "./songs/entities/song";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres', // Tvoj username
            password: 'fE272%sT', // Tvoje geslo
            database: 'genius', // Ime baze
            entities: [Song],
            synchronize: true, // Samodejna migracija
        }),
        SongsModule,
    ],

})
export class AppModule {}