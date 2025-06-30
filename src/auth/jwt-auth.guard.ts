import {Injectable} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

//preverja avtomatsko vsak JWT token v vsakem requestu.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}