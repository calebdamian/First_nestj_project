import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalRecordDto } from './create-medicalrecord.dto';

export class UpdateMedicalRecordDto extends PartialType(
  CreateMedicalRecordDto,
) {}
