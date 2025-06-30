import {Controller, Get, Res} from '@nestjs/common';
import {AppService} from "./app.service";
import {join} from "path";
import { Response } from 'express';

@Controller('app')
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    @Get('test-image')
    getImage(@Res() res: Response){
        return res.sendFile(join(__dirname, '..', 'uploads/covers/1749384804854-120388189.png'));
    }
}
