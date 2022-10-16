//maneja TODAS las peticiones que ingresan al server
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt.auth.guard';
import { LocalAuthGuard } from './auth/guards/local.auth.guard';
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }
  //cuando se quiere realizar el login, ingresa primero al Guard
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req): any {
    console.log(req.user);
    return this.authService.login(req.user); //al logear devuelve el jwt
  }
  //ruta para ver el usuario actual
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
