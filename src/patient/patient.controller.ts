import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Res,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UseInterceptors, UsePipes } from '@nestjs/common/decorators';
import {
  Param,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { AdminService } from 'src/admin/admin.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

import { CreatePatientDto } from './dto/create-patient.dto';

import { PatientService } from './patient.service';

//@UseGuards(JwtAuthGuard)
@Controller('paciente')
export class PatientController {
  constructor(private patientService: PatientService) {}
  @Post()
  public async create(@Res() res, @Body() createPatientDto: CreatePatientDto) {
    const patient = await this.patientService.create(createPatientDto);
    return res.status(HttpStatus.OK).json({
      message: 'Patient created successfully',
      patient,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const patients = await this.patientService.findAll();
    res.status(HttpStatus.OK).json({
      patients,
    });
  }

  @Get('/:numId')
  async getUser(@Res() res, @Param('num_id') num_id) {
    const patient = await this.patientService.findOneByNumId(num_id);
    return res.status(HttpStatus.OK).json({ patient });
  }

  @Get('/:id')
  async get(@Res() res, @Param('id') id) {
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
