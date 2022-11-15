import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  first_name: string;
  @IsString()
  middle_name: string;
  @IsString()
  last_name: string;
  @IsString()
  id_card: string;
  //userId: number;
}
