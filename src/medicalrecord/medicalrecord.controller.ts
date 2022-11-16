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

  @Post('user/:userId/patient/:patientId/medical-record')
  createMedicalRecord(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('patientId', ParseIntPipe) patientId: number,
    @Body() createMedicalRecordDto: CreateMedicalRecordDto,
  ) {
    return this.medicalRecordService.createMedicalRecord(
      userId,
      patientId,
      createMedicalRecordDto,
    );
  }

  @Get('medical-records')
  findAllMedicalRecords() {
    return this.medicalRecordService.findAllMedicalRecords();
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
