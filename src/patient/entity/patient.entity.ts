import { Admin } from 'src/admin/entity/admin.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'paciente' })
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  nombres: string;

  @Column({})
  apellidos: string;

  @Column({ type: 'date' })
  fecha_nac: Date;

  @Column('varchar', { length: 10 })
  num_contacto: string;

  @Column({
    unique: true,
  })
  num_id: string;

  @Column({
    unique: true,
  })
  email: string;

  @ManyToOne(() => Admin, (admin) => admin.pacientes)
  admin: Admin;

  /*@OneToOne(() => ClHist, (historia_clinica) => historia_clinica.paciente)
  @JoinColumn()
  h_clinica: ClHist;*/

  @CreateDateColumn()
  fecha_creacion: any;

  @UpdateDateColumn()
  fecha_modificacion: any;
}
