"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const typeorm_1 = require("typeorm");
const genre_1 = require("../../genres/entities/genre");
const artist_1 = require("../../artists/entities/artist");
const user_entity_1 = require("../../users/entities/user.entity");
let Song = class Song {
};
exports.Song = Song;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Song.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "lyrics", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Song.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Song.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'genre_id' }),
    __metadata("design:type", Number)
], Song.prototype, "genreId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genre_1.Genre, (genre) => genre.songs, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'genre_id' }),
    __metadata("design:type", genre_1.Genre)
], Song.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'artist_id' }),
    __metadata("design:type", Number)
], Song.prototype, "artistId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_1.Artist, (artist) => artist.songs, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'artist_id' }),
    __metadata("design:type", artist_1.Artist)
], Song.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Song.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.songs, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Song.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Song.prototype, "coverImagePath", void 0);
exports.Song = Song = __decorate([
    (0, typeorm_1.Entity)('songs')
], Song);
