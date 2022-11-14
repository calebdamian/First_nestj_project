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

  @Column()
  first_name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  id_card: string;

  // TODO: Relation with  MedicalRecord, PatientProfile
  @ManyToOne(() => AdministratorEntity, (admin) => admin.patients)
  admin: AdministratorEntity;

  @OneToOne(() => MedicalRecordEntity)
  @JoinColumn()
  medical_record: MedicalRecordEntity;

  @OneToOne(() => PatientProfileEntity)
  @JoinColumn()
  patient_profile: PatientProfileEntity;
  /*@OneToOne(() => ClHist, (historia_clinica) => historia_clinica.paciente)
  @JoinColumn()
  h_clinica: ClHist;*/
}
