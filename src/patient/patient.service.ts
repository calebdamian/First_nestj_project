import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entity/patient.entity';
import { Repository } from 'typeorm';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepository: Repository<Patient>,
    private adminService: AdminService,
  ) {}

  public async create(createpatientDto: CreatePatientDto) {
    const adminFound = await this.adminService.findById(
      createpatientDto.adminId,
    );
    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_ACCEPTABLE);
    }

    const newPatient = this.patientRepository.create(createpatientDto);
    return this.patientRepository.save(newPatient);
  }
  /*
  async delete(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    return deletedUser;
  }

  async update(userId: string, createUserDTO: CreatePatientDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }*/

  async findAll(): Promise<Patient[]> {
    const patients = this.patientRepository.find();
    return patients;
  }

  async findOneByNumId(num_id: string) {
    const foundPatient = await this.patientRepository
      .createQueryBuilder('paciente')
      .where('paciente.num_id= :num_id', {
        num_id: num_id,
      })
      .getOne();
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
    if (!foundPatient) {
      return new HttpException('Patient not found', HttpStatus.NOT_FOUND);
    }
    return foundPatient;
  }
}
