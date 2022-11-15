import { IsString } from 'class-validator';

import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AdministratorEntity } from 'src/admin/entity/admin.entity';
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

  @OneToOne(() => AdministratorEntity, (admin) => admin.user)
  admin: AdministratorEntity;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
