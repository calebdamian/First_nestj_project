import { EntryEntity } from 'src/entry/entities/entry.entity';
import { EvolutionEntity } from 'src/evolution/entities/evolution.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drug')
export class DrugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  genericName?: string;

  @Column({ nullable: true })
  brandName?: string;

  @Column({ nullable: true })
  form?: string;

  @ManyToMany(() => EntryEntity)
  entry: EntryEntity[];

  @ManyToMany(() => EvolutionEntity)
  evolution: EvolutionEntity[];
}
