import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateMedicalRecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalRecordDto } from './dto/update-medicalrecord.dto';
import { MedicalRecordEntity } from './entities/medicalrecord.entity';

@Injectable()
export class MedicalRecordService {
  constructor(
    @InjectRepository(MedicalRecordEntity)
    private medicalRecordRepository: Repository<MedicalRecordEntity>,
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  async createMedicalRecord(
    id: number,
    patientId: number,
    createMedicalRecordDto: CreateMedicalRecordDto,
  ) {
    const foundUser = await this.usersRepository.findOneBy({ id });
    console.log(foundUser);
    if (!foundUser)
      throw new HttpException(
        'Admin user not found. Cannot create medical record.',
        HttpStatus.BAD_REQUEST,
      );

    const foundPatient = await this.patientRepository.findOneBy({
      id: patientId,
    });
    console.log(foundPatient);
    if (!foundPatient)
      throw new HttpException(
        'Patient not found. Cannot create medical record.',
        HttpStatus.BAD_REQUEST,
      );

    const newMedicalRecord = this.medicalRecordRepository.create({
      ...createMedicalRecordDto,
      // user: foundUser,
      patient: foundPatient,
    });

    console.log(newMedicalRecord);

    return this.medicalRecordRepository.save(newMedicalRecord);
  }

  async findAllMedicalRecords(): Promise<MedicalRecordEntity[]> {
    return this.medicalRecordRepository.find();
  }

  async findOneMedicalRecordByPk(id: number) {
    const foundMedicalRecord = await this.medicalRecordRepository.findOneBy({
      id,
    });
    if (!foundMedicalRecord) {
      return new HttpException(
        'MedicalRecord not found at findOne',
        HttpStatus.NOT_FOUND,
      );
    }
    return foundMedicalRecord;
  }

  async updateMedicalRecord(
    id: number,
    updateMedicalRecordDto: UpdateMedicalRecordDto,
  ) {
    const foundMedicalRecord = await this.medicalRecordRepository.findOneBy({
      id,
    });
    if (!foundMedicalRecord) {
      return new HttpException(
        'MedicalRecord not found at update',
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedMedicalRecord = Object.assign(
      foundMedicalRecord,
      updateMedicalRecordDto,
    );
    return await this.medicalRecordRepository.save(updatedMedicalRecord);
  }

  async deleteMedicalRecord(id: number) {
    const foundMedicalRecord = await this.medicalRecordRepository.findOneBy({
      id,
    });
    if (!foundMedicalRecord) {
      return new HttpException(
        'MedicalRecord not found at delete',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.medicalRecordRepository.delete(id);
  }
}
