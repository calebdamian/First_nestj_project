import { IsEmail, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  full_name: string;
  @IsEmail()
  email: string;
}
