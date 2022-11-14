import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from 'src/admin/admin.module';
import { PatientEntity } from './entity/patient.entity';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity]), AdminModule],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
