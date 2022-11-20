import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('user/login')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }
}
