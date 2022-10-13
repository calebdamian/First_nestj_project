// esta clase define las propiedades que deben venir desde la app cliente
// valida los datos
// 
// FIXME: Validar con ValidationPipes
// TODO:  agregar un login.user.dto 

import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, MaxLength } from "class-validator/types/decorator/decorators";

export class CreateUserDTO {

    @IsString()
    @MaxLength(30, { message: 'Name must be 30 characters length maximum.' })
    readonly name: string;
    @IsNotEmpty({ message: 'Username cannot be empty.' })
    readonly username: string;
    @IsNotEmpty({ message: 'Password cannot be empty.' })
    readonly password: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly imageURL: string;
    readonly createdAt: Date; //esto deberá establecerlo mongoDb
}