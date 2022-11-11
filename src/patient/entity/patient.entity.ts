import { Admin } from 'src/admin/entity/admin.entity';
import { ClHist } from 'src/cl_hist/entity/cl_hist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'paciente' })
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  nombres: string;

  @Column({})
  apellidos: string;

  @Column()
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

  @OneToOne(() => ClHist)
  @JoinColumn()
  h_clinica: ClHist;
}
