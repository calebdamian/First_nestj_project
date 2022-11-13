import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';
import { Patient } from 'src/patient/entity/patient.entity';

@Entity({ name: 'administrador' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  nombres: string;

  @Column({})
  apellidos: string;

  @Column({
    unique: true,
  })
  nombre_usuario: string;

  @Column({})
  password: string;

  @Column({
    unique: true,
  })
  email: string;

  @CreateDateColumn()
  fecha_creacion: any;

  @OneToMany(() => Patient, (paciente) => paciente.admin)
  pacientes: Patient[];
}
