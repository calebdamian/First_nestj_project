import { PatientEntity } from 'src/patient/entity/patient.entity';
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

  /*@ManyToOne(() => AdministratorEntity, (admin) => admin.medical_records)
  admin: AdministratorEntity;*/

  @OneToOne(() => PatientEntity, (patient) => patient.medical_record, {})
  patient: PatientEntity;
}
