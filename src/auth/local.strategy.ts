import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { IUser } from "src/user/interfaces/user.interface";
import { AuthService } from "./auth.service";


//segun la doc oficial: It's helpful to think of Passport as a mini framework in itself.
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) { //instancia del servicio de autenticacion
        super(); //configuracion de la autenticacion 
    }

    async validate(username: string, password: string): Promise<IUser> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}