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

  @Column('date')
  dob: Date;

  @Column()
  contact_number: string;

  @Column()
  email: string;
  /* @OneToOne(
    () => PatientProfileEntity,
    (patient_profile) => patient_profile.patient,
    {
      eager: true,
      onDelete: 'CASCADE',
    },
  )*/
  /*@JoinColumn()
  patient_profile: PatientProfileEntity;*/

  @ManyToOne(() => UserEntity, (user) => user.patient)
  user: UserEntity;

  @OneToOne(
    () => MedicalRecordEntity,
    (medical_record) => medical_record.patient,
    {
      eager: true,
      cascade: true,
      //  onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  medical_record: MedicalRecordEntity;
}
