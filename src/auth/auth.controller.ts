import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { LoginDto } from './login.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //@UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDTO: LoginDto): Promise<{ access_token: string }> {
    const { nombre_usuario, password } = loginDTO;
    const valid = await this.authService.validateUser(nombre_usuario, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.loginWithCredentials(nombre_usuario);
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
