import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from './entity/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PatientProfileEntity } from './entity/patient.profile.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreatePatientProfileDto } from './dto/create-patient-profile.dto';
import { UpdatePatientProfileDto } from './dto/update-patient-profile.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
    @InjectRepository(PatientProfileEntity)
    private patientProfileRepository: Repository<PatientProfileEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  public async createPatient(id: number, createPatientDto: CreatePatientDto) {
    const foundUser = await this.usersRepository.findOneBy({ id });
    console.log(foundUser);
    if (!foundUser)
      throw new HttpException(
        'Admin user not found. Cannot create patient.',
        HttpStatus.BAD_REQUEST,
      );
    const newPatient = this.patientRepository.create({
      ...createPatientDto,
    });

    return this.patientRepository.save(newPatient);
  }

  async createPatientProfile(
    id: number,
    createPatientProfileDto: CreatePatientProfileDto,
  ) {
    const foundPatient = await this.patientRepository.findOneBy({ id });
    if (!foundPatient)
      throw new HttpException(
        'Patient not found. Cannot create profile.',
        HttpStatus.BAD_REQUEST,
      );

    const newPatientProfile = this.patientProfileRepository.create(
      createPatientProfileDto,
    );

    const savedPatientProfile = await this.patientProfileRepository.save(
      newPatientProfile,
    );

    foundPatient.patient_profile = savedPatientProfile;
    return this.patientRepository.save(foundPatient);
  }

  async updatePatientProfile(
    id: number,
    updatePatientProfileDto: UpdatePatientProfileDto,
  ) {
    const patientProfileFound = await this.patientProfileRepository.findOneBy({
      id,
    });
    if (!patientProfileFound)
      throw new HttpException(
        'Patient not found. Cannot create profile.',
        HttpStatus.BAD_REQUEST,
      );
    const updatedPatientProfile = Object.assign(
      patientProfileFound,
      updatePatientProfileDto,
    );

    return await this.patientProfileRepository.save(updatedPatientProfile);
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
