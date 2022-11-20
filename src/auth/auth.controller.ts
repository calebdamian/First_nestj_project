import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginForm } from './dto/user-login.dto';
import { LocalAuthGuard } from './guards/local.auth.guard';
@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  @Post('user/login')
  async login(@Body() user: LoginForm) {
    return this.authService.loginWithCredentials(user);
  }
}
