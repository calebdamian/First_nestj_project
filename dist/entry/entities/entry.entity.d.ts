import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
export declare class EntryEntity {
    id: number;
    createdDate: Date;
    healthStatus: number;
    diagnosis: string;
    comments: string;
    patient: PatientEntity;
    drugs: DrugEntity[];
}
