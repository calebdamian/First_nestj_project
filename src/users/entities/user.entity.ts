import { IsString } from 'class-validator';

import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserProfileEntity } from './user.profile.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ length: '15' })
  username: string;

  @IsString()
  @Column()
  password: string;

  @OneToOne(() => UserProfileEntity, { eager: true })
  @JoinColumn()
  profile: UserProfileEntity;

  @OneToMany(() => PatientEntity, (patient) => patient.user, { eager: true })
  patient: PatientEntity[];

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
