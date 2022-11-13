import { IsString, IsEmail } from 'class-validator';
export class CreateAdminDto {
  @IsString()
  nombres: string;
  @IsString()
  apellidos: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  nombre_usuario: string;
}
