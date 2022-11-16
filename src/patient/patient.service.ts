import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from './entity/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PatientProfileEntity } from './entity/patient.profile.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreatePatientProfileDto } from './dto/create-patient-profile.dto';
import { UpdatePatientProfileDto } from './dto/update-patient-profile.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

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
      user: foundUser,
    });

    console.log(newPatient);

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

  async updatePatient(id: number, updatePatientDto: UpdatePatientDto) {
    const foundPatient = await this.patientRepository.findOneBy({ id });
    if (!foundPatient) {
      return new HttpException(
        'Patient not found at update',
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedPatient = Object.assign(foundPatient, updatePatientDto);

    return await this.patientRepository.save(updatedPatient);
  }

  async deletePatient(id: number) {
    return await this.patientRepository.delete(id);
  }

  async findAllPatients(): Promise<PatientEntity[]> {
    return this.patientRepository.find();
  }

  async findOnePatientByCardId(id_card: string) {
    const foundPatient = await this.patientRepository.findOneBy({ id_card });
    if (!foundPatient) {
      return new HttpException(
        'Patient not found at findOneByCardId',
        HttpStatus.NOT_FOUND,
      );
    }
    return foundPatient;
  }
  async findOnePatientById(id: number) {
    const foundPatient = await this.patientRepository.findOneBy({ id });
    if (!foundPatient) {
      return new HttpException(
        'Patient not found ad findOneByPk',
        HttpStatus.NOT_FOUND,
      );
    }
    return foundPatient;
  }

  async findOnePatientProfileById(id: number) {
    return await this.patientProfileRepository.findOneBy({ id });
  }
}
