import { PatientEntity } from 'src/patient/entity/patient.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patients: PatientEntity[];
    hashPassword(): Promise<void>;
    get fullName(): string;
}
