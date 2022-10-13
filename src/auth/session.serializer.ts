import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { UsersService } from 'src/user/user.service';
@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private usersService: UsersService) {
        super();
    }
    serializeUser(user: User, done: (err: Error, user: any) => void): any {
        done(null, { id: user.id });
    }

    async deserializeUser(payload: any, done: (err: Error, payload: string) => void): Promise<any> {
        const user = this.usersService.getUserById(payload.id);
        done(null, (await user).username);
    }
}