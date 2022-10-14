//maneja TODAS las peticiones que ingresan al server
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  getHello(): string {
    return this.appService.getHello();
  }
}
