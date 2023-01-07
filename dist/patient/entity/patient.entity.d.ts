import { EntryEntity } from 'src/entry/entities/entry.entity';
import { EvolutionEntity } from 'src/evolution/entities/evolution.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class PatientEntity {
    id: number;
    firstName: string;
    lastName: string;
    idCard: string;
    dob: Date;
    contactNumber: string;
    email: string;
    user: UserEntity;
    medicalRecord: EntryEntity[];
    evolution: EvolutionEntity;
}
