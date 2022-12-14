import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEntryDto } from 'src/entry/dto/create-entry.dto';
import { PatientEntity } from 'src/patient/entity/patient.entity';
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
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
  ) {}

  async create(createEvolutionInt: EvolutionInterface) {
    let createEvolDto;
    
    const foundPatient = await this.patientRepository.findOneBy({
      id: createEvolutionInt.patientId,
    });
    if (!foundPatient) {
      throw new HttpException(
        'Patient not found. Cannot create entry.',
        HttpStatus.BAD_REQUEST,
      );
    }
      
    await this.coreEvolutionService.getEvolution(createEvolutionInt).then(res => createEvolDto = res);

    const newEvol = this.evolutionRepository.create({
      ...createEvolDto,
      recommendedDrugs: createEvolDto.recommendedDrugsIds.map((recommendedDrugsIds) => ({ id: recommendedDrugsIds })),
      patient: foundPatient,
    });

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
