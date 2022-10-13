import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoggedInUserDTO } from "src/user/dto/logged.user.dto";
import { LocalAuthGuard } from './local.auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Body() loggedInUserDTO: LoggedInUserDTO) {
        return this.authService.login(loggedInUserDTO);
    }

}