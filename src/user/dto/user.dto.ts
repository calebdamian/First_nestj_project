// esta clase define las propiedades que deben venir desde la app cliente
// valida los datos
// 
// FIXME: Validar con ValidationPipes
// Agregar username?
export class CreateUserDTO {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly imageURL: string;
    readonly createdAt: Date; //esto deberá establecerlo mongoDb
}