import { IsNumber } from 'class-validator';

export class CreateClHistDto {
  @IsNumber()
  pacienteId: number;
}
