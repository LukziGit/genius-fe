"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const songs_module_1 = require("./songs/songs.module");
const song_1 = require("./songs/entities/song");
const genre_1 = require("./genres/entities/genre");
const genres_module_1 = require("./genres/genres.module");
const artists_module_1 = require("./artists/artists.module");
const artist_1 = require("./artists/entities/artist");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres', // Tvoj username
                password: 'fE272%sT', // Tvoje geslo
                database: 'genius', // Ime baze
                entities: [song_1.Song, genre_1.Genre, artist_1.Artist, user_entity_1.User],
                synchronize: true, // Samodejna migracija
            }),
            songs_module_1.SongsModule,
            genres_module_1.GenresModule,
            artists_module_1.ArtistsModule,
            users_module_1.UsersModule,
        ],
    })
], AppModule);
