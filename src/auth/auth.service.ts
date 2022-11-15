import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from './jwt.payload';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // TODO: Look for user by username using user service
  }
  // const user = await this.adminService.findByUsername(nombre_usuario);

  /* if (user && (await user.validatePassword(password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }*/

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
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  //TODO: validate password hash here
  /*  async validatePassword(password: string): Promise<boolean> {
    const passwordMatch = await bcrypt.compare(password, this.password);
    return passwordMatch;
  }*/
}
