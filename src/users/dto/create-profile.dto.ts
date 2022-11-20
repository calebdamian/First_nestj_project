import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @ApiProperty({
    type: String,
    description: 'Users full name',
  })
  @IsString()
  full_name: string;
  @ApiProperty({
    type: String,
    description: 'Users email',
  })
  @IsEmail()
  email: string;
}
