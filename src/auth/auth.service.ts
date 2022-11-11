import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const validUser = await this.userService.findByUsername(username);

    if (validUser && (await validUser).password === password) {
      const { password, ...result } = validUser;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
