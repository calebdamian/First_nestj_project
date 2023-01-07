import { AuthService } from './auth.service';
import { LoginForm } from './dto/user-login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: LoginForm): Promise<{
        access_token: string;
    }>;
}
