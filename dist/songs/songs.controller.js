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
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const create_song_dto_1 = require("./entities/create-song.dto");
const update_song_dto_1 = require("./entities/update-song.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const common_2 = require("@nestjs/common");
let SongsController = class SongsController {
    constructor(songService) {
        this.songService = songService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.songService.findAll();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.songService.findOne(+id);
        });
    }
    create(createSongDTO, req) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.songService.create(createSongDTO, req.user.userId);
        });
    }
    update(id, updateSongDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.songService.update(+id, updateSongDTO);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.songService.delete(+id);
        });
    }
};
exports.SongsController = SongsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_song_dto_1.CreateSongDTO, Object]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_song_dto_1.UpdateSongDTO]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "delete", null);
exports.SongsController = SongsController = __decorate([
    (0, common_1.Controller)('songs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [songs_service_1.SongsService])
], SongsController);
