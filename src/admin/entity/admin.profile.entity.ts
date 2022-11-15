import { IsEmail, IsString } from 'class-validator';
import {
  Admin,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AdministratorEntity } from './admin.entity';

@Entity('administrator_profile')
export class Administrator_ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ length: 50 })
  full_name: string;

  @IsEmail()
  @Column({ length: 50 })
  email: string;

  @OneToOne(() => AdministratorEntity, (admin) => admin.admin_profile, {
    eager: true,
    cascade: true,
  })
  admin: AdministratorEntity;
}
