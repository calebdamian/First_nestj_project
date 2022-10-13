import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
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
}

