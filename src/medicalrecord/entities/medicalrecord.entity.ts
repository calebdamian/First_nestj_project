import { PatientEntity } from 'src/patient/entity/patient.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('medical_record')
export class MedicalRecordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // this column was generated for test purposes only
  @Column()
  entry: string;

  @OneToOne(() => PatientEntity, (patient) => patient.medical_record)
  patient: PatientEntity;

  @ManyToOne(() => UserEntity, (user) => user.medical_record)
  user: UserEntity;
}
