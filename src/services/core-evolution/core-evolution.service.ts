import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { CreateEvolutionDto } from 'src/evolution/dto/create-evolution.dto';
import { EvolutionInterface } from 'src/evolution/evolution.controller';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class CoreEvolutionService {
  constructor(private readonly patientService: PatientService) {}
  private createEvolDto: CreateEvolutionDto;
  private patientEntryList: any[] = [];
  private patientDrugsList: any[] = [];
  private posibleRecDrugsList: any[] = [];
  private recomendsDrugs: any[] = [];

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
    await this.getAllEntries(evolParam.patientId, evolParam.diagnosis);
    this.getRecomendDrugs();

    this.createEvolDto = {
      beginDate: evolParam.beginDate,
      endDate: evolParam.endDate,
      diagnosis: evolParam.diagnosis,
      patientId: evolParam.patientId,
      initialHealthStatus: this.getinitialHealthStatus(),
      currentHealthStatus: this.getcurrentHealthStatus(),
      stringHealthStatus: this.getEvolutionHealthStatus(),
      recommendedDrugsIds: this.recomendsDrugs,
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
      .then((result: any[]) => {
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

    this.patientEntryList.forEach((entry: any) => {
      entry.drugs.forEach((drugs: any) => {
        if (this.patientDrugsList.length === 0) {
          this.patientDrugsList.push(drugs);
        } else {
          if (
            this.patientDrugsList.find(
              (drugPar: any) => drugs.id === drugPar.id,
            ) === undefined
          ) {
            this.patientDrugsList.push(drugs);
          }
        }
      });
    });
  }

  private getinitialHealthStatus(): number {
    return this.patientEntryList[0].healthStatus;
  }

  private getcurrentHealthStatus(): number {
    return this.patientEntryList[this.patientEntryList.length - 1].healthStatus;
  }

  private getEvolutionHealthStatus(): string {
    if (this.getcurrentHealthStatus() === this.getinitialHealthStatus()) {
      return 'No improvement';
    } else if (this.getcurrentHealthStatus() > this.getinitialHealthStatus()) {
      return 'There is Improvement';
    } else {
      return 'Has worsened';
    }
  }

  private async getAllEntries(patientId: number, diagnosis: string) {
    let arrAux = [];
    await this.patientService.getAllEntries().then((res: any[]) => {
      arrAux = res.filter(
        (entry) =>
          entry.patient.id !== patientId &&
          entry.diagnosis === diagnosis &&
          entry.healthStatus > this.getcurrentHealthStatus(),
      );
    });

    arrAux.forEach((entry: any) => {
      entry.drugs.forEach((drugs: any) => {
        if (this.posibleRecDrugsList.length === 0) {
          this.posibleRecDrugsList.push(drugs);
        } else {
          if (
            this.posibleRecDrugsList.find(
              (drugPar: any) => drugs.id === drugPar.id,
            ) === undefined
          ) {
            this.posibleRecDrugsList.push(drugs);
          }
        }
      });
    });
  }

  private getRecomendDrugs() {
    this.posibleRecDrugsList.forEach((drug: any) => {
      this.validateDrug(drug);
    });
  }

  private validateDrug(drugPar: any) {
    if (
      this.recomendsDrugs.length === 0 &&
      this.patientDrugsList.find((drug: any) => drug.id === drugPar.id) ===
        undefined
    ) {
      this.recomendsDrugs.push(drugPar);
    } else if (
      this.patientDrugsList.find((drug: any) => drugPar.id === drug.id) ===
      undefined
    ) {
      this.recomendsDrugs.push(drugPar);
    }
  }
}
