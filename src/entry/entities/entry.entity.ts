import { IsInt, IsString } from 'class-validator';
import { DiagnosisEntity } from 'src/diagnosis/entities/diagnosis.entity';
import { DrugEntity } from 'src/drug/entities/drug.entity';
import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @OneToMany(() => DrugEntity, (drug) => drug.entry)
  drugs: DrugEntity[];

  @OneToOne(() => DiagnosisEntity)
  @JoinColumn()
  diagnosis: DiagnosisEntity;
}
