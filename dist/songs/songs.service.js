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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const song_1 = require("./entities/song");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let SongsService = class SongsService {
    constructor(songRepository, userService) {
        this.songRepository = songRepository;
        this.userService = userService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.songRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.songRepository.findOne({ where: { id } });
        });
    }
    create(createSongDTO, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findById(userId); // user glede na ID
            if (!user) { // prever ce je user null
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            const newSong = this.songRepository.create(Object.assign(Object.assign({}, createSongDTO), { user }));
            return this.songRepository.save(newSong);
        });
    }
    update(id, updateSongDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const song = yield this.songRepository.findOne({ where: { id } });
            if (!song) {
                throw new common_1.NotFoundException(`Song with id ${id} not found`);
            }
            yield this.songRepository.update(id, updateSongDTO);
            const updatedSong = yield this.songRepository.findOne({ where: { id } });
            if (!updatedSong) {
                throw new common_1.NotFoundException(`Updated song with id ${id} not found`);
            }
            return updatedSong;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.songRepository.delete(id);
        });
    }
};
exports.SongsService = SongsService;
exports.SongsService = SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_1.Song)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], SongsService);
