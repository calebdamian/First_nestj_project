import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DrugEntity } from './entities/drug.entity';

@Injectable()
export class DrugService {
  constructor(
    @InjectRepository(DrugEntity)
    private drugRepository: Repository<DrugEntity>) {}

  // create(createDrugDto: CreateDrugDto) {
  //   return 'This action adds a new drug';
  // }

  findAll() {
    return this.drugRepository.find();
  }

  findOne(id: number) {
    return this.drugRepository.findOneBy({ id });
  }

  // update(id: number, updateDrugDto: UpdateDrugDto) {
  //   return `This action updates a #${id} drug`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} drug`;
  // }
}
