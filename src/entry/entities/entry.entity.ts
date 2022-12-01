import { IsInt, IsString } from 'class-validator';
import { DiagnosisEntity } from 'src/diagnosis/entities/diagnosis.entity';
import { DrugEntity } from 'src/drug/entities/drug.entity';
import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @IsString()
  @Column()
  comments: string;

  @ManyToOne(
    () => MedicalRecordEntity,
    (medicalRecord) => medicalRecord.entries,
  )
  medicalRecord: MedicalRecordEntity;

  @ManyToMany(() => DrugEntity)
  @JoinTable()
  drugs: DrugEntity[];

  @OneToOne(() => DiagnosisEntity)
  diagnosis: DiagnosisEntity;
}
