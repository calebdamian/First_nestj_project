import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { MedicalRecordController } from './medicalrecord.controller';

@Module({
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
})
export class MedicalRecordModule {}
