import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entity/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepository: Repository<Patient>,
    private adminService: AdminService,
  ) {}

  public async createPatient(id: number, createpatientDto: CreatePatientDto) {
    const admin = await this.adminService.findById(id);
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
  }

  async update(
    id: number,
    createUserDTO: CreatePatientDto,
  ): Promise<UpdateResult> {
    if (this.findOne(id) != null) {
      return await this.patientRepository.update(id, createUserDTO);
    }
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.patientRepository.delete(id);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find({ relations: ['admin'] });
  }

  async findOneByNumId(num_id: string) {
    const foundPatient = await this.patientRepository.findOne({
      where: {
        num_id: num_id,
      },
    });
    if (!foundPatient) {
      return new HttpException('Patient not found', HttpStatus.NOT_FOUND);
    }
    return foundPatient;
  }
  async findOne(id: number) {
    const foundPatient = await this.patientRepository
      .createQueryBuilder('paciente')
      .where('paciente.id= :id', {
        id: id,
      })
      .getOne();
    return foundPatient;
  }
}
