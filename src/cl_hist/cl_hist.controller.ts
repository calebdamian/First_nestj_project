import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { AdminService } from 'src/admin/admin.service';
import { PatientService } from 'src/patient/patient.service';
import { ClHistService } from './cl_hist.service';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';

@Controller('histclinicas')
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
  async findAllClHistories(@Res() res) {
    const clinicalHistories = await this.clHistService.findAll();
    res.status(HttpStatus.OK).json({
      clinicalHistories,
    });
  }

  @Get(':id')
  findOneClHistory(@Param('id') id: string) {
    return this.clHistService.findOne(+id);
  }

  @Patch(':id')
  updateClHistory(
    @Param('id') id: string,
    @Body() updateClHistDto: UpdateClHistDto,
  ) {
    return this.clHistService.update(+id, updateClHistDto);
  }
}
