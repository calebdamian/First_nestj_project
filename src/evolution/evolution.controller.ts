import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { Query } from '@nestjs/common/decorators';

export class EvolutionInterface {
  constructor(
    public patientId: number,
    public beginDate: Date,
    public diagnosis: string,
    public endDate?: Date,
  ) {}
}
export interface CoreEvols {
  beginDate: Date;
  endDate: Date;
  patientId: number;
  diagnosis: string;
}
export interface reportInterface {
  initialHealthStatus: number;
  currentHealthStatus: number;
}

@Controller('evolutions')
export class EvolutionController {
  constructor(private readonly evolutionService: EvolutionService) {}

  @Post()
  createEvolution(@Body() evolutionParam: EvolutionInterface) {
    const evolution = this.evolutionService.createEvolution(evolutionParam);
    return evolution;
  }

  @Get()
  getAllEvolutions() {
    return this.evolutionService.findAll();
  }

  @Get(':id')
  findEvolutionsByPatientId(@Param('id') patientid: number) {
    return this.evolutionService.findEvolutionsByPatientId(patientid);
  }

  //@Get('/core/:id/:beginDate/:endDate/:diagnosis')
  /*@Get('/core/:id/:beginDate/:endDate/:diagnosis')
  findCoreEvolutions(
    @Param('id') patientId: number,
    @Param('beginDate') beginDate: string,
    @Param('endDate') endDate: string,
    @Param('diagnosis') diagnosis: string,
  ) {
    return this.evolutionService.findCoreEvolutions(
      patientId,
      beginDate,
      endDate,
      diagnosis,
    );
  }*/

  @Post('/core')
  getCoreEvols(@Body() params: CoreEvols) {
    return this.evolutionService.findCoreEvolutions(
      params.patientId,
      params.beginDate,
      params.endDate,
      params.diagnosis,
    );
  }
  /*@Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEvolutionDto: UpdateEvolutionDto,
  ) {
    return this.evolutionService.update(+id, updateEvolutionDto);
  }
*/
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.evolutionService.remove(id);
  }

  @Post('/report')
  getReport(@Body() params: reportInterface) {
    return this.evolutionService.report(
      params.initialHealthStatus,
      params.currentHealthStatus,
    );
  }
}
