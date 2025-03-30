import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Song} from "./entities/song";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Song]), UsersModule],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
