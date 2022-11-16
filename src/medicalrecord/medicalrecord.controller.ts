import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { CreateMedicalRecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalRecordDto } from './dto/update-medicalrecord.dto';

@Controller()
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post('user/:user-id/patient/:patient-id/medical-record')
  create(
    @Param('user-id', ParseIntPipe) user_id: number,
    @Param('patient-id', ParseIntPipe) patient_id: number,
    @Body() createMedicalRecordDto: CreateMedicalRecordDto,
  ) {
    return this.medicalRecordService.createMedicalRecord(
      user_id,
      patient_id,
      createMedicalRecordDto,
    );
  }

  @Get('medical-records')
  findAllMedicalRecords() {
    return this.medicalRecordService.findAllMedicalRecords;
  }

  @Get('medical-record/:id')
  findOneMedicalRecord(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.findOneMedicalRecordByPk(id);
  }

  @Put('medical-record/:id')
  updateMedicalRecord(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicalRecordDto: UpdateMedicalRecordDto,
  ) {
    return this.medicalRecordService.updateMedicalRecord(
      id,
      updateMedicalRecordDto,
    );
  }

  @Delete('medical-record/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.deleteMedicalRecord(id);
  }
}
