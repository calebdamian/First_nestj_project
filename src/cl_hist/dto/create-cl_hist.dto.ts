import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClHistDto {
  /*@IsNotEmpty()
  @IsNumber()
  adminId: number;
  @IsNumber()
  pacienteId: number;*/
  @IsString()
  descripcion: string;
}
