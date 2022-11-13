import { Admin } from 'src/admin/entity/admin.entity';
import { Patient } from 'src/patient/entity/patient.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
@Entity({ name: 'historia_clinica' })
export class ClHist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Admin, (admin) => admin.historias_clinicas)
  admin: Admin;

  @Column()
  descripcion: string;

  /*@OneToOne(() => Patient, (paciente) => paciente.h_clinica)
  paciente: Patient;
  @Column({ nullable: true })
  pacienteId: number;*/

  @CreateDateColumn()
  fecha_creacion: any;

  @UpdateDateColumn()
  fecha_modificacion: any;
}
