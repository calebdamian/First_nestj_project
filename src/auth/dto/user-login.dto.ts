import { ApiProperty } from '@nestjs/swagger';

export class LoginForm {
  @ApiProperty({
    type: String,
    description: 'Existing user email',
  })
  email: string;
  @ApiProperty({
    type: String,
    description: 'Existing user password',
  })
  password: string;
}
