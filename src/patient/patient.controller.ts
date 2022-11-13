import { Controller, Get, HttpStatus, Post, Res, Body } from '@nestjs/common';

import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';

import { AdminService } from 'src/admin/admin.service';

import { CreatePatientDto } from './dto/create-patient.dto';

import { PatientService } from './patient.service';

//@UseGuards(JwtAuthGuard)
@Controller('pacientes')
export class PatientController {
  constructor(private patientService: PatientService) {}
  @Post(':id')
  public async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    return this.patientService.createPatient(id, createPatientDto);
  }

  @Get()
  async findAllPatients(@Res() res) {
    const patients = await this.patientService.findAll();
    res.status(HttpStatus.OK).json({
      patients,
    });
  }

  @Get(':numId')
  async getPatientByNumId(@Res() res, @Param('num_id') num_id) {
    const patient = await this.patientService.findOneByNumId(num_id);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Get(':id')
  async getPatientById(@Res() res, @Param('id') id) {
    const patient = await this.patientService.findOne(id);
    return res.status(HttpStatus.OK).json({ patient });
  }
  /*
  @Delete('/delete/:userId')
  async deleteUser(@Res() res, @Param('userId') userId) {
    const userDeleted = await this.userService.deleteUser(userId);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      userDeleted,
    });
  }

  @Put('/update/:userId')
  async updateUser(
    @Res() res,
    @Body() createUserDTO: CreatePatientDto,
    @Param('userId') userId,
  ) {
    const updatedUser = await this.userService.updateUser(
      userId,
      createUserDTO,
    );
    if (!updatedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      updatedUser,
    });
  }*/
}
