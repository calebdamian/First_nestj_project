import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(15)
  @ApiProperty({
    type: String,
    description: 'Users email',
  })
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(8, 24)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Password should have 1 upper case, low case letter along with a number and special character.',
  })
  @ApiProperty({
    type: String,
    description: 'Users password',
  })
  password: string;

  lastName: string;
  firstName: string;
}
