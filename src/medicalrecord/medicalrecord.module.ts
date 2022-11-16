import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { MedicalRecordController } from './medicalrecord.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecordEntity } from './entities/medicalrecord.entity';
import { PatientModule } from 'src/patient/patient.module';
import { UsersModule } from 'src/users/users.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';

@Module({
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
  imports: [
    TypeOrmModule.forFeature([MedicalRecordEntity, UserEntity, PatientEntity]),
    PatientModule,
    UsersModule,
  ],
})
export class MedicalRecordModule {}
