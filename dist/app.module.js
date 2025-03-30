"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const node_process_1 = __importDefault(require("node:process"));
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: node_process_1.default.env.DATABASE_HOST || 'localhost',
                port: Number(node_process_1.default.env.DATABASE_PORT || 5432),
                username: node_process_1.default.env.DATABASE_USER,
                password: node_process_1.default.env.DATABASE_PASSWORD,
                database: node_process_1.default.env.DATABASE_NAME,
                entities: [song_1.Song, genre_1.Genre, artist_1.Artist, user_entity_1.User],
                synchronize: true, // Samodejna migracija
            }),
            songs_module_1.SongsModule,
            genres_module_1.GenresModule,
            artists_module_1.ArtistsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
