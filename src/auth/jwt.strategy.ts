import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

// povemu kje naj JWT token vzame
// s katerim ključom ga preverit
//kaj s podatki iz tokena

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET as string
        });
    }

    async validate(payload: any){
        return {userId: payload.sub, email: payload.email};
    }
    // ko je token veljaven se pokliče validate npr da lahka uporabs  req.user.userId
}