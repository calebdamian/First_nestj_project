import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreatePatientProfileDto {
  @IsDateString()
  dob: Date;
  @IsString()
  contact_number: string;
  @IsEmail()
  email: string;
}
