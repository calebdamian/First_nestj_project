//maneja TODAS las peticiones que ingresan al server
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local.auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  //cuando se quiere realizar el login, ingresa primero al Guard
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req): any {
    return { msg: 'Logged in succesfully' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/auth/protected')
  getHello(@Request() req): string {
    return req.user;
  }





}
