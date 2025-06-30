import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as fs from "node:fs"
import * as express from 'express';



//Tukaj se zažene aplikacija
//Nest factory ustvari instanco iz AppModule
//DTO - globalna validacija z useGlobalPipes
//CORS, da je frontend in backedn ločen
//Da se aplikacija zažene na pravem portu
async function bootstrap() {
    //const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    //app.useStaticAssets(join(__dirname, '..', 'uploads'));

    app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
    console.log('Serving static from:', join(__dirname, '..', 'uploads'));
    console.log('Slika obstaja:', fs.existsSync(join(__dirname, '..', 'uploads/covers/layoutslika.png')));
    app.useGlobalPipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: false, transform: true})); //Za validacijo da napiše če je kej narobe pri POST
    app.enableCors();


    await app.listen(process.env.PORT ?? 3000);


}
bootstrap();