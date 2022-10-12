import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { UsersService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {

    }

    //el siguiente metodo permite realizar la validacion con Passport
    async validateUser(username: string): Promise<any> {
        const user = this.userService.findByUsername(username);
        if (user) {

        }
    }
}

