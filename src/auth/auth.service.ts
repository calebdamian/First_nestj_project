import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
@Injectable()
//clase encargada de obtener y verificar el username / password del usuario
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) {

    }

    //el siguiente metodo permite realizar la validacion con Passport
    async validateUser(username: string, password: string): Promise<any> {
        const validUser = await this.userService.findByUsername(username);

        if (validUser && (await validUser).password === password) {
            const { password, ...result } = validUser;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id }
        return {
            access_token: this.jwtService.sign(payload), //genera el jwt de las propiedades del usuario
        };
    }

    /**hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    }**/
}

