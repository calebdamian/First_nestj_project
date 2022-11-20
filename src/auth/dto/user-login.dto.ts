import { ApiProperty } from '@nestjs/swagger';

export class LoginForm {
  @ApiProperty({
    type: String,
    description: 'Existing user username',
  })
  username: string;
  @ApiProperty({
    type: String,
    description: 'Existing user password',
  })
  password: string;
}
