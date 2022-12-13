import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { DrugService } from './drug.service';

@Controller('drugs')
@UseGuards(JwtAuthGuard)
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  // @Post()
  // create(@Body() createDrugDto: CreateDrugDto) {
  //   return this.drugService.create(createDrugDto);
  // }

  @Get()
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async findAll(@Req() req) {
    return this.drugService.findAll();
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string) {
    return this.drugService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDrugDto: UpdateDrugDto) {
  //   return this.drugService.update(+id, updateDrugDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.drugService.remove(+id);
  // }
}
