import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { CreateMedicalRecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalRecordDto } from './dto/update-medicalrecord.dto';

@Controller('medicalrecord')
export class MedicalRecordController {
  constructor(private readonly medicalrecordService: MedicalRecordService) {}

  @Post()
  create(@Body() createMedicalrecordDto: CreateMedicalRecordDto) {
    return this.medicalrecordService.create(createMedicalrecordDto);
  }

  @Get()
  findAll() {
    return this.medicalrecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalrecordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicalrecordDto: UpdateMedicalRecordDto,
  ) {
    return this.medicalrecordService.update(+id, updateMedicalrecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalrecordService.remove(+id);
  }
}
