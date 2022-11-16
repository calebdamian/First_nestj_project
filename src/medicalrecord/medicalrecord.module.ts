import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { MedicalRecordController } from './medicalrecord.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecordEntity } from './entities/medicalrecord.entity';
import { PatientModule } from 'src/patient/patient.module';

@Module({
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
  imports: [TypeOrmModule.forFeature([MedicalRecordEntity]), PatientModule],
})
export class MedicalRecordModule {}
