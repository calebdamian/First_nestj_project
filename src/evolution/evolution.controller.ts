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

export class EvolutionInterface {
  constructor(
    public patientId: number,
    public beginDate: Date,
    public endDate: Date,
    public diagnosis: string,
  ) {}
}

@Controller('evolution')
export class EvolutionController {
  constructor(private readonly evolutionService: EvolutionService) {}

  @Post()
  createEvolution(@Body() evolutionParam: EvolutionInterface) {
    //return this.evolutionService.create(createEvolutionDto);
    this.evolutionService.create(evolutionParam);
    return null;
  }

  @Get()
  findAll() {
    return this.evolutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evolutionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEvolutionDto: UpdateEvolutionDto,
  ) {
    return this.evolutionService.update(+id, updateEvolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evolutionService.remove(+id);
  }
}
