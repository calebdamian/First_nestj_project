import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
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

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_creacion: any;

  @OneToMany(() => Patient, (pacientes) => pacientes.admin)
  pacientes: Patient[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashSync(this.password, genSaltSync(10));
  }
}
