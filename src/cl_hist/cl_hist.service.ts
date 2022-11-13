import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entity/admin.entity';
import { Repository } from 'typeorm';
import { CreateClHistDto } from './dto/create-cl_hist.dto';
import { UpdateClHistDto } from './dto/update-cl_hist.dto';
import { ClHist } from './entity/cl_hist.entity';

@Injectable()
export class ClHistService {
  constructor(
    @InjectRepository(ClHist) private clHistrepository: Repository<ClHist>,
    private adminService: AdminService,
  ) {}

  async createClHist(id: number, createClHistDto: CreateClHistDto) {
    const admin = await this.adminService.findById(id);
    if (!admin)
      throw new HttpException(
        'Admin not found. Cannot create clinical history.',
        HttpStatus.NOT_ACCEPTABLE,
      );

    const newClHist = this.clHistrepository.create({
      ...createClHistDto,
      admin,
    });

    return await this.clHistrepository.save(newClHist);
  }

  findAll(): Promise<ClHist[]> {
    return this.clHistrepository.find();
  }

  /*
  public async create(createpatientDto: CreatePatientDto, admin: Admin) {
    const newPatient = this.patientRepository.create(createpatientDto);

    admin.pacientes = [...admin.pacientes];

    await admin.save();

    return this.patientRepository.save(newPatient);
  } */

  async findOne(id: number): Promise<ClHist> {
    const foundClinicalHistory = await this.clHistrepository
      .createQueryBuilder('historia_clinica')
      .where('historia_clinica.id= :id', {
        id: id,
      })
      .getOne();
    return foundClinicalHistory;
  }

  async update(id: number, updateClHistDto: UpdateClHistDto) {}
}
