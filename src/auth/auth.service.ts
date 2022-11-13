import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from 'src/admin/entity/admin.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
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

  async login(user: Admin) {
    const payload = { username: user.nombre_usuario, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
