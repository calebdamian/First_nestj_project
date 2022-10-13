// esta clase define las propiedades que deben venir desde la app cliente
// valida los datos
//
// FIXME: Validar con ValidationPipes

export class LoggedInUserDTO {
    readonly username: string;
    readonly password: string;
}