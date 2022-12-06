import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({
    type: String,
    description: 'Patients first name only',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'Patients last name only',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Patients id card',
  })
  @IsString()
  idCard: string;

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
  contactNumber: string;

  @ApiProperty({
    type: String,
    description: 'Patients email',
  })
  @IsEmail()
  email: string;
}
