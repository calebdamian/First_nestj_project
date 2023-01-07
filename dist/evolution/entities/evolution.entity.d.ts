import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
export declare class EvolutionEntity {
    id: number;
    beginDate: Date;
    endDate: Date;
    diagnosis: string;
    initialHealthStatus: number;
    currentHealthStatus: number;
    stringHealthStatus: string;
    recommendedDrugs: DrugEntity[];
    patient: PatientEntity;
}
