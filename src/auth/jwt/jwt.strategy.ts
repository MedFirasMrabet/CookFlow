// auth/jwt/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    console.log(payload, 'payload');
    
    const user = await this.userModel.findOneId( payload.sub );
    console.log(user,'userstrategu');
    
    if (user) {
      const wre = user.toObject({ versionKey: false, getters: true })
      console.log(wre , 'wre');
      
      return wre;
    }
    throw new UnauthorizedException();
  }
}
