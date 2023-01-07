import { Injectable } from '@nestjs/common';
import { CreateEvolutionDto } from 'src/evolution/dto/create-evolution.dto';
import { EvolutionInterface } from 'src/evolution/evolution.controller';
import { EvolutionService } from 'src/evolution/evolution.service';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class CoreEvolutionService {
  constructor(private readonly patientService: PatientService) {}

  private createEvolDto: CreateEvolutionDto;
  private patientEntryList: any[] = [];
  private patientDrugsList: any[] = [];
  private posibleRecDrugsList: any[] = [];
  private recommendedDrugs: any[] = [];

  async getEvolution(evolParam: EvolutionInterface) {
    if (evolParam.endDate === undefined) {
      evolParam.endDate = new Date();
    }
    await this.loadData(evolParam);

    return this.createEvolDto;
  }

  async loadData(evolParam: EvolutionInterface) {
    await this.getEntryList(
      evolParam.beginDate,
      evolParam.endDate,
      evolParam.patientId,
      evolParam.diagnosis,
    );
    await this.getBetterHealthStatusEntries(
      evolParam.patientId,
      evolParam.diagnosis,
    );
    this.getRecommendedDrugs();

    this.createEvolDto = {
      beginDate: evolParam.beginDate,
      endDate: evolParam.endDate,
      diagnosis: evolParam.diagnosis,
      patientId: evolParam.patientId,
      initialHealthStatus: this.getinitialHealthStatus(),
      currentHealthStatus: this.getCurrentHealthStatus(),
      stringHealthStatus: this.getEvolutionHealthStatus(),
      recommendedDrugsIds: this.recommendedDrugs,
    };
  }

  private async getEntryList(
    beginDatePar: Date,
    endDatePar: Date,
    patientId: number,
    diagnosis: string,
  ) {
    const endDate = new Date(endDatePar);
    const beginDate = new Date(beginDatePar);

    await this.patientService
      .getPatientEntries(patientId)
      .then((result: any) => {
        this.patientEntryList = result.filter(
          (entry: any) =>
            entry.createdDate.getTime() >= beginDate.getTime() &&
            entry.createdDate.getTime() <= endDate.getTime() &&
            entry.diagnosis === diagnosis,
        );
        this.patientEntryList.sort(
          (entry1: any, entry2: any) => entry1.createdDate - entry2.createdDate,
        );
      });

    setTimeout(() => {
      if (this.patientEntryList.length === 0) {
        throw new Error('La lista de entradas del paciente está vacía');
      }
    }, 500);

    this.patientEntryList.forEach((entry: any) => {
      entry.drugs.forEach((drug: any) => {
        if (this.patientDrugsList.length === 0) {
          this.patientDrugsList.push(drug);
        } else {
          const f = this.patientDrugsList.find(
            (element: any) => drug.id === element.id,
          );
          if (f === undefined) {
            this.patientDrugsList.push(drug);
          }
        }
      });
    });
  }

  private getinitialHealthStatus(): number {
    return this.patientEntryList[0].healthStatus;
  }

  private getCurrentHealthStatus(): number {
    return this.patientEntryList[this.patientEntryList.length - 1].healthStatus;
  }

  private getEvolutionHealthStatus(): string {
    if (this.getCurrentHealthStatus() === this.getinitialHealthStatus()) {
      return 'No ha mejorado';
    } else if (this.getCurrentHealthStatus() > this.getinitialHealthStatus()) {
      return 'Ha mejorado';
    } else {
      return 'Ha empeorado';
    }
  }

  private async getBetterHealthStatusEntries(
    patientId: number,
    diagnosis: string,
  ) {
    let betterHealthStatusPatients = [];
    await this.patientService.getAllEntries().then((res: any[]) => {
      betterHealthStatusPatients = res.filter(
        (entry) =>
          entry.patient.id !== patientId &&
          entry.diagnosis === diagnosis &&
          entry.healthStatus > this.getCurrentHealthStatus(),
      );
    });

    betterHealthStatusPatients.forEach((entry: any) => {
      entry.drugs.forEach((drug: any) => {
        if (this.posibleRecDrugsList.length === 0) {
          this.posibleRecDrugsList.push(drug);
        } else {
          const f = this.posibleRecDrugsList.find(
            (element: any) => drug.id === element.id,
          );
          if (f === undefined) {
            this.posibleRecDrugsList.push(drug);
          }
        }
      });
    });
  }

  private getRecommendedDrugs() {
    if (this.posibleRecDrugsList.length === 0) {
      throw new Error('Parameter is not a number!');
    }
    this.posibleRecDrugsList.forEach((drug: any) => {
      this.validateDuplicatedDrugs(drug);
    });
  }

  private validateDuplicatedDrugs(drugPar: any) {
    const f = this.patientDrugsList.find((drug: any) => drug.id === drugPar.id);
    const f2 = this.patientDrugsList.find(
      (drug: any) => drugPar.id === drug.id,
    );
    if (this.recommendedDrugs.length === 0 && f === undefined) {
      this.recommendedDrugs.push(drugPar);
    } else if (f2 === undefined) {
      this.recommendedDrugs.push(drugPar);
    }
  }
}
