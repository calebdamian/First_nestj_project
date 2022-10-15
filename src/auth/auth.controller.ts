import { Controller, Get, Post, Body, UseGuards, Res, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoggedInUserDTO } from "src/user/dto/logged.user.dto";
import { LocalAuthGuard } from './local.auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Res() res, @Body() loggedInUserDTO: LoggedInUserDTO) {
        const user = this.authService.validateUser(loggedInUserDTO);
        console.log(user);
        return res.status(HttpStatus.OK).json({
            message: 'User logged in succesfully',
            user
        });

    }

}