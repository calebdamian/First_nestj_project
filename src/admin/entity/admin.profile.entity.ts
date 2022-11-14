import { IsEmail, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
