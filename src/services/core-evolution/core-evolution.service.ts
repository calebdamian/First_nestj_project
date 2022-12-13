import { Injectable } from '@nestjs/common';
import { CreateEvolutionDto } from 'src/evolution/dto/create-evolution.dto';
import { EvolutionInterface } from 'src/evolution/evolution.controller';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class CoreEvolutionService {
  constructor(private readonly patientService: PatientService) {}
  private createEvolDto: CreateEvolutionDto;

  //TODO: corregir las fechas del entry dto
  getEvolution(evolParam: EvolutionInterface): CreateEvolutionDto {
    /* this.createEvolDto = {
      beginDate: evolParam.beginDate,
      endDate: evolParam.endDate,
      diagnosis: evolParam.diagnosis,
      patientId: evolParam.patientId,
    };*/
    this.getInitialHealthStatus(evolParam.beginDate, evolParam.patientId);
    return null;
  }

  async getInitialHealthStatus(beginDatePar: Date, patientId: number) {
    let aux: any[];
    let endDate = new Date();
    let beginDate = new Date(beginDatePar);

    await this.patientService
      .getPatientEntries(patientId)
      .then((result: any[]) => {
        aux = result.filter((entry: any) => );
      });

    let aux2 = new Date(beginDate);
  }
}
