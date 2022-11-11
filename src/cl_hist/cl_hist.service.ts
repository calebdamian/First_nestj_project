import { Injectable } from '@nestjs/common';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';

@Injectable()
export class ClHistService {
  create(createClHistDto: CreateClHistDto) {
    return 'This action adds a new clHist';
  }

  findAll() {
    return `This action returns all clHist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clHist`;
  }

  update(id: number, updateClHistDto: UpdateClHistDto) {
    return `This action updates a #${id} clHist`;
  }

  remove(id: number) {
    return `This action removes a #${id} clHist`;
  }
}
