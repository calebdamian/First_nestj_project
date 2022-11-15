import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PatientEntity } from 'src/patient/entity/patient.entity';

import { UserEntity } from 'src/users/entities/user.entity';
import { Administrator_ProfileEntity } from './admin.profile.entity';
import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
@Entity({ name: 'administrator' })
export class AdministratorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity, (user) => user.admin, {
    eager: true,
  })
  @JoinColumn()
  user: UserEntity;

  @OneToOne(
    () => Administrator_ProfileEntity,
    (admin_profile) => admin_profile.admin,
    {
      eager: true,
      cascade: true,
    },
  )
  @JoinColumn()
  admin_profile: Administrator_ProfileEntity;

  @OneToMany(
    () => MedicalRecordEntity,
    (medical_records) => medical_records.admin,
    {
      eager: true,
      cascade: true,
    },
  )
  medical_records: MedicalRecordEntity[];

  @OneToMany(() => PatientEntity, (patients) => patients.admin, {
    eager: true,
    cascade: true,
  })
  patients: PatientEntity[];
}
