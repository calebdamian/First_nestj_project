import { IsString } from 'class-validator';

export class CreateMedicalRecordDto {
  @IsString()
  entry: string;
}
