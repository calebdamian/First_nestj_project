import { IsEmail, IsString } from 'class-validator';
export class CreateAdminProfileDto {
  @IsString()
  full_name: string;
  @IsEmail()
  email: string;
}
