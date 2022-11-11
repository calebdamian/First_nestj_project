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
import {
  Param,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

import { CreatePatientDto } from './dto/create-patient.dto';

import { PatientService } from './patient.service';

@UseGuards(JwtAuthGuard)
@Controller('/paciente')
export class PatientController {
  constructor(private userService: PatientService) {}
  /*@Post('/create')
  async createPost(@Res() res, @Body() createPatientDto: CreatePatientDto) {
    const user = await this.userService.createUser(createPatientDto);
    return res.status(HttpStatus.OK).json({
      message: 'User successfully created',
      user,
    });
  }

  @Get()
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    res.status(HttpStatus.OK).json({
      users,
    });
  }

  @Get('/:userId')
  async getUser(@Res() res, @Param('userId') userId) {
    const user = await this.userService.getUserById(userId);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

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
