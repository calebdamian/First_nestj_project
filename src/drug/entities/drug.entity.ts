import { EntryEntity } from 'src/entry/entities/entry.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => EntryEntity, (entry) => entry.drugs)
  entry: EntryEntity;
}
