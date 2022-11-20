import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({
    type: String,
    description: 'Patients first name only',
  })
  @IsString()
  first_name: string;
  @ApiProperty({
    type: String,
    description: 'Patients middle name only',
  })
  @IsString()
  middle_name: string;
  @ApiProperty({
    type: String,
    description: 'Patients last name only',
  })
  @IsString()
  last_name: string;
  @ApiProperty({
    type: String,
    description: 'Patients id card',
  })
  @IsString()
  id_card: string;
  //userId: number;
}
