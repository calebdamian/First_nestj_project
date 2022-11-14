import { AdministratorEntity } from 'src/admin/entity/admin.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medical_record')
export class MedicalRecordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // this column was generated for test purposes only
  @Column()
  entry: string;

  @ManyToOne(() => AdministratorEntity, (admin) => admin.medical_records)
  admin: AdministratorEntity;
  // TODO: Relations with Patient, Admin
  /* @ManyToOne(() => Admin, (admin) => admin.pacientes)
  admin: Admin;*/
}
