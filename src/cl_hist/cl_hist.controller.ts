import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { AdminService } from 'src/admin/admin.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { ClHistService } from './cl_hist.service';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';

@Controller('histclinicas')
//@UseGuards(JwtAuthGuard)
export class ClHistController {
  constructor(
    private readonly clHistService: ClHistService,
    private adminService: AdminService,
  ) {}

  @Post(':id')
  async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() createClHistDto: CreateClHistDto,
  ) {
    return this.clHistService.createClHist(id, createClHistDto);
  }

  @Get()
  async findAllClHistories() {
    const clinicalHistories = await this.clHistService.findAll();
    return clinicalHistories;
  }

  @Get(':id')
  async findOneClHistory(@Param('id') id: number, @Res() res) {
    const foundClinicalHistory = await this.clHistService.findOne(id);
    if (foundClinicalHistory) {
      return res.status(HttpStatus.OK).json({
        foundClinicalHistory,
      });
    }
    return res.status(HttpStatus.NOT_FOUND).json({
      error: 'This This resource  no longer exist or has been removed',
      foundClinicalHistory,
    });
  }

  @Patch(':id')
  async updateClHistory(
    @Param('id') id: number,
    @Body() updateClHistDto: UpdateClHistDto,
    @Res() res,
  ) {
    const response = await this.clHistService.update(id, updateClHistDto);
    if (response) {
      return res.status(HttpStatus.OK).json({
        message: 'Clinical history updated successfully',
        response,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Clinical history cannot be updated',
        response,
      });
    }
  }

  @Delete(':id')
  async deleteClHistory(@Param('id') id: number, @Res() res) {
    await this.clHistService.remove(id);
    res
      .status(HttpStatus.OK)
      .json({ message: 'Clinical history deleted successfully' });
  }
}
