//similar al DTO
// Detalla que se maneja dentro del código, más no los datos que se envían entre el front y el back
import { Document } from "mongoose";
//herencia de la clase Document para definir los documentos de Mongo
export interface User extends Document {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly imageURL: string;
    readonly createdAt: Date;
} //contrato