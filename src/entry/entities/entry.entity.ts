import { IsInt, IsString } from 'class-validator';
import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('entry')
export class EntryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createDate: Date;

  @Column()
  @IsInt()
  healthStatus: number;

  @Column()
  diagnosis: string;

  @IsString()
  @Column()
  comments: string;

  @ManyToOne(() => PatientEntity, (patient) => patient.medicalRecord)
  patient: PatientEntity;

  @ManyToMany(() => DrugEntity)
  @JoinTable()
  drugs: DrugEntity[];
}
