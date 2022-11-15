import { IsEmail, IsString } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('user_profile')
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsString()
  full_name: string;
  @Column()
  @IsEmail()
  email: string;
}
