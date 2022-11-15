import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientEntity } from './patient.entity';

@Entity('patient_profile')
export class PatientProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dob: Date;

  @Column()
  contact_number: string;

  @Column()
  email: string;

  @OneToOne(() => PatientEntity, (patient) => patient.patient_profile, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  patient: PatientEntity;
}
