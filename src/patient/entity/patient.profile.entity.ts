import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToOne(() => PatientProfileEntity, (patient) => patient.patient)
  patient: PatientProfileEntity;
}
