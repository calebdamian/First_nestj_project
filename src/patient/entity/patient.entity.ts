import { AdministratorEntity } from 'src/admin/entity/admin.entity';
import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
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

  @ManyToOne(() => AdministratorEntity, (admin) => admin.patients)
  admin: AdministratorEntity;

  @OneToOne(() => MedicalRecordEntity)
  @JoinColumn()
  medical_record: MedicalRecordEntity;

  @OneToOne(() => PatientProfileEntity)
  @JoinColumn()
  patient_profile: PatientProfileEntity;
}
