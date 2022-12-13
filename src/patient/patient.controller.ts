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

import {
  Param,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { request } from 'http';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CreateEntryDto } from 'src/entry/dto/create-entry.dto';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';

@ApiTags('Patients')
@UseGuards(JwtAuthGuard)
@Controller('patients')
export class PatientController {
  constructor(private patientService: PatientService) {}
  @Post()
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  public async create(
    @Req() request,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    const userEmail = request.user.email;
    const patient = await this.patientService.createPatient(
      userEmail,
      createPatientDto,
    );
    return patient.id;
  }

  @Post(':id/entries')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  public async createEntry(
    @Req() request,
    @Param('id', ParseIntPipe) id: number,
    // @Param('id', ParseIntPipe) healthStatusid: number,
    @Body() createEntryDto: CreateEntryDto,
  ) {
    const entry = await this.patientService.createEntry(
      id,
      // healthStatusid,
      createEntryDto,
    );
    return entry.id;
  }

  @Get(':id/entries')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  public async getEntries(
    @Req() request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const entries = await this.patientService.getPatientEntries(id);
    return entries;
  }

  @Get()
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async findAllPatients(@Res() res) {
    const patients = await this.patientService.findAllPatients();
    res.status(HttpStatus.OK).json(patients);
  }

  @Get(':id-card')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async getPatientByNumId(@Res() res, @Param('id-card') id_card) {
    const patient = await this.patientService.findOnePatientByCardId(id_card);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async getPatientById(@Res() res, @Param('id') id) {
    const patient = await this.patientService.findOnePatientById(id);
    return res.status(HttpStatus.OK).json(patient);
  }

  @Delete(':id')
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

  @Put(':id')
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
