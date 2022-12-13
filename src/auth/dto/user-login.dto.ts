import { ApiProperty } from '@nestjs/swagger';

export class LoginForm {
  @ApiProperty({
    type: String,
    description: 'Existing user email',
  })
  readonly email: string;

  @ApiProperty({
    type: String,
    description: 'Existing user password',
  })
  readonly password: string;
}
