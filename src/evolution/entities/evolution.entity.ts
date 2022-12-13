import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('evolution')
export class EvolutionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //TODO: Agregar fecha de inicio y fin, diagnostico (esto llega por parametro del medico)
  // TODO: Estado de salud inicial. Estado de salud actual.
  //TODO: Estado de salud que diga si ha empeorado o mejorado pero en letras
  //TODO: Relacion de evolucion a medicamentos M:M (medicamentos recomendados)

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

  @ManyToMany(() => DrugEntity)
  @JoinTable()
  recommendedDrugs: DrugEntity[];

  @ManyToOne(() => PatientEntity)
  @JoinColumn()
  patient: PatientEntity;
}
