import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    //console.log('At AUTH.SERVICE file');
    //console.log(username, password);
    const foundUser = await this.usersService.findOneUserByUsername(username);
    //console.log(user);
    if (!foundUser) return null;
    const isValidPass = await this.validatePassword(
      password,
      foundUser.password,
    );
    console.log('At auth service ');
    console.log(isValidPass);
    if (!isValidPass) return null;

    return foundUser;
  }

  async validatePassword(
    plainTextPassword: string,
    password: string,
  ): Promise<boolean> {
    //console.log('At validatePassword');
    //console.log(plainTextPassword);
    //console.log(password);
    const passwordMatch = await bcrypt.compare(plainTextPassword, password);
    console.log('PASO EL BCRYPT');
    console.log(passwordMatch);
    return passwordMatch;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
