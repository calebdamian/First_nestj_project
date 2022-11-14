import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
