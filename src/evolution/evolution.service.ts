import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoreEvolutionService } from 'src/services/core-evolution/core-evolution.service';
import { Repository } from 'typeorm';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { EvolutionEntity } from './entities/evolution.entity';
import { EvolutionInterface } from './evolution.controller';

@Injectable()
export class EvolutionService {
  constructor(
    private readonly coreEvolutionService: CoreEvolutionService,
    @InjectRepository(EvolutionEntity)
    private evolutionRepository: Repository<EvolutionEntity>,
  ) {}

  async create(createEvolutionInt: EvolutionInterface) {
    const createEvolDto =
      this.coreEvolutionService.getEvolution(createEvolutionInt);

    const newEvol = this.evolutionRepository.create(createEvolDto);

    return await this.evolutionRepository.save(newEvol);
  }

  findAll() {
    return `This action returns all evolution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evolution`;
  }

  update(id: number, updateEvolutionDto: UpdateEvolutionDto) {
    return `This action updates a #${id} evolution`;
  }

  remove(id: number) {
    return `This action removes a #${id} evolution`;
  }
}
