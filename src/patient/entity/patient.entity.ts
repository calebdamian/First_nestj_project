import { EntryEntity } from 'src/entry/entities/entry.entity';
import { EvolutionEntity } from 'src/evolution/entities/evolution.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'patient' })
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ unique: true })
  idCard: string;

  @Column('date')
  dob: Date;

  @Column()
  contactNumber: string;

  @Column()
  email: string;

  @ManyToOne(() => UserEntity, (user) => user.patients)
  user: UserEntity;

  @OneToMany(() => EntryEntity, (entry) => entry.patient, {
    onDelete: 'CASCADE',
  })
  medicalRecord: EntryEntity[];

  @OneToMany(() => EvolutionEntity, (evolution) => evolution.patient, {
    onDelete: 'CASCADE',
  })
  evolution: EvolutionEntity;
}
