import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { JWTPayload } from './jwt.payload';
@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nombre_usuario: string, password: string): Promise<any> {
    const user = await this.adminService.findByUsername(nombre_usuario);

    if (user && (await user.validatePassword(password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  /*async signup(admin: Admin): Promise<Admin> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(admin.password, salt);
    admin.password = hash;
    return await this.adminRepository.save(admin);
  }*/
  /*const foundAdmin = await this.adminService.findByUsername(nombre_usuario);
    console.log(foundAdmin);
    console.log(await bcrypt.hash(password, 10));
    if (
      foundAdmin &&
      bcrypt.compare(foundAdmin.password, await bcrypt.hash(password, 10))
    ) {
      const { password, ...result } = foundAdmin;
      return result;
    }
    return null;*/
  /* async login(admin: any) {
    console.log(admin.admin);
    const payload = {
      admin: {
        id: admin.admin.id,
        nombre_usuario: admin.admin.nombre_usuario,
        nombres: admin.admin.nombres,
        apellidos: admin.admin.apellidos,
        fecha_creacion: admin.admin.fecha_creacion,
        email: admin.admin.email,
      },
    };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  /*async register(data) {
    console.log(data);
    const salt = bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);
    let response = await this.adminService.create(data);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }*/
  /* async generateAccessToken(name: string) {
    const user = await this.adminService.findByUsername(name);
    const payload: JWTPayload = { id: user.id };
    console.log(payload);
    return {
      access_token: this.jwtService.sign({ payload }),
    };
  }*/
  async loginWithCredentials(user: any) {
    const payload = { nombre_usuario: user.nombre_usuario, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
