import { Injectable, UnauthorizedException } from '@nestjs/common';
import { stringify } from 'querystring';
import { LoggedInUserDTO } from 'src/user/dto/logged.user.dto';
import { IUser } from 'src/user/interfaces/user.interface';
import { UsersService } from 'src/user/user.service';
@Injectable()

//clase encargada de obtener y verificar el username / password del usuario
export class AuthService {
    constructor(private userService: UsersService) {

    }

    //el siguiente metodo permite realizar la validacion con Passport
    async validateUser(username: string, password: string): Promise<any> {
        const validUser = this.userService.findByUsername(username);

        if (validUser && (await validUser).password === password) {
            //const { password, username, ...rest } = validUser;
            return validUser;
        }

        return null;
    }

    async login(loggedInUserDTO: LoggedInUserDTO): Promise<any> {
        const username = loggedInUserDTO.username;

        const found_user = await this.userService.findByUsername(username);

        if (!found_user) return new UnauthorizedException('User does not exist');

        var pass_ok = false;
        if (loggedInUserDTO.password == found_user.password) {
            pass_ok = true;
        }

        if (!pass_ok) return new UnauthorizedException('Passwords dont match');

    }
}

