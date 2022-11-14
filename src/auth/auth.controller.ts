import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Admin } from '../admin/entity/admin.entity';
import { LoginDto } from './login.dto';
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async login(@Body() loginDTO: LoginDto): Promise<{ access_token: string }> {
    const { nombre_usuario, password } = loginDTO;
    console.log(nombre_usuario);
    console.log(password);
    const valid = await this.authService.validateUser(nombre_usuario, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateAccessToken(nombre_usuario);
  }
  /* @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req);
  }
  @Post('registro')
  async register(@Request() req) {
    return this.authService.register(req);
  }*/
}
