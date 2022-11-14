import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from './entity/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
    private adminService: AdminService,
  ) {}

  public async createPatient(id: number, createpatientDto: CreatePatientDto) {
    /*  const admin = await this.adminService.findById(id);
    if (!admin)
      throw new HttpException(
        'Admin not found. Cannot create patient.',
        HttpStatus.NOT_ACCEPTABLE,
      );
    const newPatient = this.patientRepository.create({
      ...createpatientDto,
      admin,
    });
    return await this.patientRepository.save(newPatient);
    */
    return 'Patient created';
  }

  async update(id: number, createUserDTO: CreatePatientDto) {
    /*if (this.findOne(id) != null) {
      return await this.patientRepository.update(id, createUserDTO);
    }*/
    return 'Patient created';
  }
  async delete(id: number) {
    return 'Patient deleted';
    // return await this.patientRepository.delete(id);
  }

  async findAll() /*: Promise<PatientEntity[]>*/ {
    //return this.patientRepository.find({ relations: ['admin'] });
    return 'Patient created';
  }

  async findOneByNumId(num_id: string) {
    /* const foundPatient = await this.patientRepository.findOne({
      where: {
        num_id: num_id,
      },
    });
    if (!foundPatient) {
      return new HttpException('Patient not found', HttpStatus.NOT_FOUND);
    }
    return foundPatient;*/
    return 'Patient found';
  }
  async findOne(id: number) {
    /*const foundPatient = await this.patientRepository
      .createQueryBuilder('paciente')
      .where('paciente.id= :id', {
        id: id,
      })
      .getOne();
    return foundPatient;
  }*/
    return 'Patient found';
  }
}
