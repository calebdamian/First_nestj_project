import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Patient } from 'src/patient/entity/patient.entity';
@Entity({ name: 'historia_clinica' })
export class ClHist {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Patient)
  paciente: Patient;
}
