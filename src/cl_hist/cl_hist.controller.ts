import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClHistService } from './cl_hist.service';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';

@Controller('cl-hist')
export class ClHistController {
  constructor(private readonly clHistService: ClHistService) {}

  @Post()
  create(@Body() createClHistDto: CreateClHistDto) {
    return this.clHistService.create(createClHistDto);
  }

  @Get()
  findAll() {
    return this.clHistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clHistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClHistDto: UpdateClHistDto) {
    return this.clHistService.update(+id, updateClHistDto);
  }
}
