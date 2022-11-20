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
  UseGuards,
} from '@nestjs/common';
import { MedicalRecordService } from './medicalrecord.service';
import { CreateMedicalRecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalRecordDto } from './dto/update-medicalrecord.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
@ApiTags('Medical Records')
@UseGuards(JwtAuthGuard)
@Controller()
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post('user/:userId/patient/:patientId/medical-record')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
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
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  findAllMedicalRecords() {
    return this.medicalRecordService.findAllMedicalRecords();
  }

  @Get('medical-record/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  findOneMedicalRecord(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.findOneMedicalRecordByPk(id);
  }

  @Put('medical-record/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
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
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.deleteMedicalRecord(id);
  }
}
