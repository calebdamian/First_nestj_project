import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWTPayload } from '../jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'process.env.JWT_SECRET',
    });
  }
  /*
  async validate(payload: JWTPayload): Promise<CreateAdminDto> {
    const user = await this.adminService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }*/
  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
