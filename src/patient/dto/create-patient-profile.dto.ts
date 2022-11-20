import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreatePatientProfileDto {
  @ApiProperty({
    type: Date,
    description: 'Patients born date',
  })
  @IsDateString()
  dob: Date;
  @ApiProperty({
    type: String,
    description: 'Patients contact number',
  })
  @IsString()
  contact_number: string;
  @ApiProperty({
    type: String,
    description: 'Patients email',
  })
  @IsEmail()
  email: string;
}
