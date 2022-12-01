import { EntryEntity } from 'src/entry/entities/entry.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('medical_record')
export class MedicalRecordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => EntryEntity, (entries) => entries.medicalRecord, {
    eager: true,
  })
  entries: EntryEntity[];

  @OneToOne(() => PatientEntity, (patient) => patient.medical_record)
  @JoinColumn()
  patient: PatientEntity;

  /*@ManyToOne(() => UserEntity, (user) => user.medical_record)
  user: UserEntity;*/
}
