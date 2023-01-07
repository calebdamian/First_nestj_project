import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginForm } from './dto/user-login.dto';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validateUserCredentials(email: string, password: string): Promise<any>;
    validatePassword(plainTextPassword: string, password: string): Promise<boolean>;
    loginWithCredentials(user: LoginForm): Promise<{
        access_token: string;
    }>;
}
