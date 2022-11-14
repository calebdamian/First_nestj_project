import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';
import { Administrator_ProfileEntity } from './admin.profile.entity';
import { MedicalRecordEntity } from 'src/medicalrecord/entities/medicalrecord.entity';
@Entity({ name: 'administrator' })
export class AdministratorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => Administrator_ProfileEntity)
  @JoinColumn()
  admin_profile: Administrator_ProfileEntity;

  @OneToMany(
    () => MedicalRecordEntity,
    (medical_records) => medical_records.admin,
  )
  medical_records: MedicalRecordEntity[];

  @OneToMany(() => PatientEntity, (patients) => patients.admin)
  patients: PatientEntity[];

  /*@CreateDateColumn()
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
  }*/
}
