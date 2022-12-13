import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from './entity/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { CreateEntryDto } from 'src/entry/dto/create-entry.dto';
import { EntryEntity } from 'src/entry/entities/entry.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(EntryEntity)
    private entryRepository: Repository<EntryEntity>,
  ) {}

  public async createPatient(
    userEmail: string,
    createPatientDto: CreatePatientDto,
  ): Promise<PatientEntity> {
    const foundUser = await this.usersRepository.findOneBy({
      email: userEmail,
    });
    //console.log(foundUser);
    if (!foundUser)
      throw new HttpException(
        'Admin user not found. Cannot create patient.',
        HttpStatus.BAD_REQUEST,
      );
    const newPatient = this.patientRepository.create({
      ...createPatientDto,
      user: foundUser,
    });

    //console.log(newPatient);

    return await this.patientRepository.save(newPatient);
  }

  async createEntry(
    patientId: number,
    //healthStatusId: number,
    createEntryDto: CreateEntryDto,
  ) {
    const foundPatient = await this.patientRepository.findOneBy({
      id: patientId,
    });
    if (!foundPatient) {
      throw new HttpException(
        'Patient not found. Cannot create entry.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newEntry = this.entryRepository.create({
      ...createEntryDto,
      drugs: createEntryDto.drugsIds.map((drugId) => ({ id: drugId })),
      patient: foundPatient,
    });

    return await this.entryRepository.save(newEntry);
  }

  async getPatientEntries(patientId: number) {
    const foundPatient = await this.patientRepository.findOneBy({
      id: patientId,
    });
    if (!foundPatient) {
      throw new HttpException(
        'Patient not found. Cannot get entries.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.entryRepository.find({
      where: { patient: { id: patientId } },
    });
  }

  async getAllEntries() {
    const entries = await this.entryRepository.find();
    return entries;
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
    const foundPatient = await this.patientRepository.findOneBy({ id });
    if (!foundPatient) {
      return new HttpException(
        'Patient not found at delete',
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.patientRepository.delete(id);
  }

  async findAllPatients(): Promise<PatientEntity[]> {
    return this.patientRepository.find();
  }

  async findOnePatientByCardId(idCard: string) {
    const foundPatient = await this.patientRepository.findOneBy({ idCard });
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
}
