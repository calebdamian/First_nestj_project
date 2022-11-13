import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientService } from 'src/patient/patient.service';
import { Repository } from 'typeorm';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';
import { ClHist } from './entity/cl_hist.entity';

@Injectable()
export class ClHistService {
  constructor(
    @InjectRepository(ClHist) private clHistrepository: Repository<ClHist>,
    private patientService: PatientService,
  ) {}
  async create(createClHistDto: CreateClHistDto) {
    const patientFound = await this.patientService.findOne(
      createClHistDto.pacienteId,
    );
    if (!patientFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_ACCEPTABLE);
    }

    const newClHist = this.create(createClHistDto);
    return this.clHistrepository.save(newClHist);
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
