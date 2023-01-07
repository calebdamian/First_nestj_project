import { HttpException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientEntity } from './entity/patient.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { CreateEntryDto } from 'src/entry/dto/create-entry.dto';
import { EntryEntity } from 'src/entry/entities/entry.entity';
export declare class PatientService {
    private patientRepository;
    private usersRepository;
    private entryRepository;
    constructor(patientRepository: Repository<PatientEntity>, usersRepository: Repository<UserEntity>, entryRepository: Repository<EntryEntity>);
    createPatient(userEmail: string, createPatientDto: CreatePatientDto): Promise<PatientEntity>;
    createEntry(patientId: number, createEntryDto: CreateEntryDto): Promise<EntryEntity>;
    getPatientEntries(patientId: number): Promise<EntryEntity[]>;
    getAllEntries(): Promise<EntryEntity[]>;
    updatePatient(id: number, updatePatientDto: UpdatePatientDto): Promise<HttpException | (PatientEntity & UpdatePatientDto)>;
    deletePatient(id: number): Promise<HttpException | DeleteResult>;
    findAllPatients(): Promise<PatientEntity[]>;
    findOnePatientByCardId(idCard: string): Promise<PatientEntity | HttpException>;
    findOnePatientById(id: number): Promise<PatientEntity | HttpException>;
}
