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

//import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

import { CreatePatientDto } from './dto/create-patient.dto';

import { PatientService } from './patient.service';

//@UseGuards(JwtAuthGuard)
@Controller()
export class PatientController {
  constructor(private patientService: PatientService) {}
  @Post('/user/:id/patient')
  public async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    return this.patientService.createPatient(id, createPatientDto);
  }

  @Get('/patients')
  async findAllPatients(@Res() res) {
    const patients = await this.patientService.findAll();
    res.status(HttpStatus.OK).json({
      patients,
    });
  }

  @Get('patient/:numId')
  async getPatientByNumId(@Res() res, @Param('num_id') num_id) {
    const patient = await this.patientService.findOneByNumId(num_id);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Get('patient/:id')
  async getPatientById(@Res() res, @Param('id') id) {
    const patient = await this.patientService.findOne(id);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Delete('patient/:id')
  async deletePatient(@Res() res, @Param('id') id) {
    const userDeleted = await this.patientService.delete(id);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Patient deleted successfully',
      userDeleted,
    });
  }

  @Put('patient/:id')
  async updateUser(
    @Res() res,
    @Body() createUserDTO: CreatePatientDto,
    @Param('id') id,
  ) {
    const updatedUser = await this.patientService.update(id, createUserDTO);
    if (!updatedUser) throw new NotFoundException('Patient does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      updatedUser,
    });
  }
}
