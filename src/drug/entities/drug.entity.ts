import { EntryEntity } from 'src/entry/entities/entry.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('drug')
export class DrugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  drugName: string;

  @Column()
  activePrinciple: string;

  @Column()
  administration: string;

  @Column()
  commonUse: string;

  @Column()
  units: string;

  @Column()
  unitsQty: number;

  @ManyToMany(() => EntryEntity)
  entry: EntryEntity[];
}
