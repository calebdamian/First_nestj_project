import { Module } from '@nestjs/common';
import { ClHistService } from './cl_hist.service';
import { ClHistController } from './cl_hist.controller';
import { PatientModule } from 'src/patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClHist } from './entity/cl_hist.entity';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClHist]), PatientModule, AdminModule],
  controllers: [ClHistController],
  providers: [ClHistService],
})
export class ClHistModule {}
