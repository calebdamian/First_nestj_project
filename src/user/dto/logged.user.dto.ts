// esta clase define las propiedades que deben venir desde la app cliente
// valida los datos
//
import { IsNotEmpty } from "class-validator";

export class LoggedInUserDTO {
    @IsNotEmpty({ message: 'Username cannot be empty.' })
    readonly username: string;
    @IsNotEmpty({ message: 'Password cannot be empty.' })
    readonly password: string;
}