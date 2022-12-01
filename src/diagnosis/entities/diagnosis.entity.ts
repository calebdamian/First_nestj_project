import { EntryEntity } from 'src/entry/entities/entry.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('diagnosis')
export class DiagnosisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => EntryEntity)
  @JoinColumn()
  entry: EntryEntity;
}
