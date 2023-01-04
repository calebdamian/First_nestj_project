import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('evolution')
export class EvolutionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  beginDate: Date;

  @Column('date')
  endDate: Date;

  @Column()
  diagnosis: string;

  @Column()
  initialHealthStatus: number;

  @Column()
  currentHealthStatus: number;

  @Column()
  stringHealthStatus: string;

  @ManyToMany(() => DrugEntity, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  recommendedDrugs: DrugEntity[];

  @ManyToOne(() => PatientEntity, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  patient: PatientEntity;
}
