/*import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthController } from '../auth.controller';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authController: AuthController) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authController.validateUser(username, password);
    if (!user) {
      console.log(user);
      throw new UnauthorizedException();
    }

    return user;
  }
}
*/
