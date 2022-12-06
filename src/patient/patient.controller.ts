import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Body,
  UseGuards,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';

import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';

@ApiTags('Patients')
@UseGuards(JwtAuthGuard)
@Controller()
export class PatientController {
  constructor(private patientService: PatientService) { }
  @Post('/user/:id/patient')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  public async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    return this.patientService.createPatient(id, createPatientDto);
  }

  @Get('/patients')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async findAllPatients(@Res() res) {
    const patients = await this.patientService.findAllPatients();
    res.status(HttpStatus.OK).json({
      patients,
    });
  }

  @Get('patient/card/:id-card')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async getPatientByNumId(@Res() res, @Param('id-card') id_card) {
    const patient = await this.patientService.findOnePatientByCardId(id_card);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Get('patient/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async getPatientById(@Res() res, @Param('id') id) {
    const patient = await this.patientService.findOnePatientById(id);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Delete('patient/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async deletePatient(@Res() res, @Param('id') id) {
    const userDeleted = await this.patientService.deletePatient(id);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Patient deleted successfully',
      userDeleted,
    });
  }

  @Put('patient/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  async updatePatient(
    @Res() res,
    @Body() updatePatientDto: UpdatePatientDto,
    @Param('id') id,
  ) {
    const updatedPatient = await this.patientService.updatePatient(
      id,
      updatePatientDto,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Patient updated successfully',
      updatedPatient,
    });
  }
}
