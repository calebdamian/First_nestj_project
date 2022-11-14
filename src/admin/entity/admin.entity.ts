import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import { Patient } from 'src/patient/entity/patient.entity';
import { ClHist } from 'src/cl_hist/entity/cl_hist.entity';
import * as bcrypt from 'bcrypt';
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

  @OneToMany(() => Patient, (paciente) => paciente.admin, {
    eager: true,
    cascade: true,
  })
  pacientes: Patient[];

  @OneToMany(() => ClHist, (historia_clinica) => historia_clinica.admin, {
    eager: true,
    cascade: true,
  })
  historias_clinicas: ClHist[];

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    const passwordMatch = await bcrypt.compare(password, this.password);
    return passwordMatch;
  }
}
