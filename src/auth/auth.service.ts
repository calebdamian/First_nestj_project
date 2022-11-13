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
  async signup(admin: Admin): Promise<Admin> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(admin.password, salt);
    admin.password = hash;
    return await this.adminRepository.save(admin);
  }

  async validateAdmin(nombre_usuario: string, password: string): Promise<any> {
    const foundAdmin = await this.adminRepository.findOne({
      where: { nombre_usuario: nombre_usuario },
    });
    if (foundAdmin) {
      if (await bcrypt.compare(password, foundAdmin.password)) {
        const { password, ...result } = foundAdmin;
        return result;
      }
      return null;
    }
    return null;
  }

  async login(admin: Admin) {
    const payload = { nombre_usuario: admin.nombre_usuario, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
