import { Controller } from '@nestjs/common';
import { Admin } from 'src/admin/entity/admin.entity';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  validateUser(username: string, password: string) {
    return this.authService.validateUser(username, password);
  }

  login(user: Admin) {
    return this.authService.login(user);
  }
}
