import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface";
import { AuthGuard } from '@nestjs/passport';

//esta clase solo especifica la estrategia para que passport sepa lo que estamos usando 
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { //le decimos que estamos usando una estrategia local
    //aqui se crea la sesion del login
    async canActivate(context: ExecutionContext) {
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();

        await super.logIn(request);
        return result;
    }
}