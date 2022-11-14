import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AdministratorEntity } from './admin.entity';

@Entity('administrator_profile')
export class Administrator_ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;
}
