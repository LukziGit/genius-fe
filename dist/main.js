"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs = __importStar(require("node:fs"));
const express = __importStar(require("express"));
//Tukaj se zažene aplikacija
//Nest factory ustvari instanco iz AppModule
//DTO - globalna validacija z useGlobalPipes
//CORS, da je frontend in backedn ločen
//Da se aplikacija zažene na pravem portu
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        //const app = await NestFactory.create(AppModule);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        //app.useStaticAssets(join(__dirname, '..', 'uploads'));
        app.use('/uploads', express.static((0, path_1.join)(__dirname, '..', 'uploads')));
        console.log('Serving static from:', (0, path_1.join)(__dirname, '..', 'uploads'));
        console.log('Slika obstaja:', fs.existsSync((0, path_1.join)(__dirname, '..', 'uploads/covers/layoutslika.png')));
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true })); //Za validacijo da napiše če je kej narobe pri POST
        app.enableCors();
        yield app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
    });
}
bootstrap();
