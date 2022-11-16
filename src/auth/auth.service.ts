import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from './utils/jwt.payload';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    console.log('At AUTH.SERVICE file');
    console.log(username, password);
    const user = await this.usersService.findOneUserByUsername(username);

    if (this.validatePassword(password, user.password)) return user;

    return null;
  }

  async validatePassword(
    plainTextPassword: string,
    password: string,
  ): Promise<boolean> {
    console.log('At validatePassword');
    console.log(plainTextPassword);
    console.log(password);
    const passwordMatch = await bcrypt.compare(plainTextPassword, password);
    return passwordMatch;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
