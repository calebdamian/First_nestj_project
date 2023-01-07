import { CreateEntryDto } from 'src/entry/dto/create-entry.dto';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';
export declare class PatientController {
    private patientService;
    constructor(patientService: PatientService);
    create(request: any, createPatientDto: CreatePatientDto): Promise<number>;
    createEntry(request: any, id: number, createEntryDto: CreateEntryDto): Promise<number>;
    getEntries(request: any, id: number): Promise<import("../entry/entities/entry.entity").EntryEntity[]>;
    getAllEntries(): Promise<import("../entry/entities/entry.entity").EntryEntity[]>;
    findAllPatients(res: any): Promise<void>;
    getPatientByNumId(res: any, id_card: any): Promise<any>;
    getPatientById(res: any, id: any): Promise<any>;
    deletePatient(res: any, id: any): Promise<any>;
    updatePatient(res: any, updatePatientDto: UpdatePatientDto, id: any): Promise<any>;
}
