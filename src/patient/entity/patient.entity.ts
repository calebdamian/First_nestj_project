import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PatientProfileEntity } from './patient.profile.entity';

@Entity({ name: 'patient' })
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  middle_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({
    unique: true,
  })
  id_card: string;

  @ManyToOne(() => UserEntity, (user) => user.patient)
  user: UserEntity;

  @OneToOne(
    () => MedicalRecordEntity,
    (medical_record) => medical_record.patient,
  )
  @JoinColumn()
  medical_record: MedicalRecordEntity;

  @OneToOne(
    () => PatientProfileEntity,
    (patient_profile) => patient_profile.patient,
  )
  @JoinColumn()
  patient_profile: PatientProfileEntity;
}
