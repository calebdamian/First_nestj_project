import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    //verifica si la sesion expiro o no a traves del cookie generado por express
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();


        return request.isAuthenticated();
    }
}