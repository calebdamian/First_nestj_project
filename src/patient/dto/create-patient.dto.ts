import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  nombres: string;
  @IsString()
  apellidos: string;
  @IsEmail()
  email: string;
  @IsDateString()
  fecha_nac: Date;
  @IsString()
  num_contacto: string;
  @IsString()
  num_id: string;
  @IsNumber()
  adminId: number;
  @IsOptional()
  @IsNumber()
  hClinicaId: number;
}
