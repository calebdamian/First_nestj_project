"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreEvolutionService = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("../../patient/patient.service");
let CoreEvolutionService = class CoreEvolutionService {
    constructor(patientService) {
        this.patientService = patientService;
        this.patientEntryList = [];
        this.patientDrugsList = [];
        this.posibleRecDrugsList = [];
        this.recommendedDrugs = [];
    }
    async getEvolution(evolParam) {
        if (evolParam.endDate === undefined) {
            evolParam.endDate = new Date();
        }
        await this.loadData(evolParam);
        return this.createEvolDto;
    }
    async loadData(evolParam) {
        await this.getEntryList(evolParam.beginDate, evolParam.endDate, evolParam.patientId, evolParam.diagnosis);
        await this.getBetterHealthStatusEntries(evolParam.patientId, evolParam.diagnosis);
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
    async getEntryList(beginDatePar, endDatePar, patientId, diagnosis) {
        const endDate = new Date(endDatePar);
        const beginDate = new Date(beginDatePar);
        await this.patientService
            .getPatientEntries(patientId)
            .then((result) => {
            this.patientEntryList = result.filter((entry) => entry.createdDate.getTime() >= beginDate.getTime() &&
                entry.createdDate.getTime() <= endDate.getTime() &&
                entry.diagnosis === diagnosis);
            this.patientEntryList.sort((entry1, entry2) => entry1.createdDate - entry2.createdDate);
        });
        setTimeout(() => {
            if (this.patientEntryList.length === 0) {
                throw new Error('La lista de entradas del paciente está vacía');
            }
        }, 500);
        this.patientEntryList.forEach((entry) => {
            entry.drugs.forEach((drug) => {
                if (this.patientDrugsList.length === 0) {
                    this.patientDrugsList.push(drug);
                }
                else {
                    const f = this.patientDrugsList.find((element) => drug.id === element.id);
                    if (f === undefined) {
                        this.patientDrugsList.push(drug);
                    }
                }
            });
        });
    }
    getinitialHealthStatus() {
        return this.patientEntryList[0].healthStatus;
    }
    getCurrentHealthStatus() {
        return this.patientEntryList[this.patientEntryList.length - 1].healthStatus;
    }
    getEvolutionHealthStatus() {
        if (this.getCurrentHealthStatus() === this.getinitialHealthStatus()) {
            return 'No ha mejorado';
        }
        else if (this.getCurrentHealthStatus() > this.getinitialHealthStatus()) {
            return 'Ha mejorado';
        }
        else {
            return 'Ha empeorado';
        }
    }
    async getBetterHealthStatusEntries(patientId, diagnosis) {
        let betterHealthStatusPatients = [];
        await this.patientService.getAllEntries().then((res) => {
            betterHealthStatusPatients = res.filter((entry) => entry.patient.id !== patientId &&
                entry.diagnosis === diagnosis &&
                entry.healthStatus > this.getCurrentHealthStatus());
        });
        betterHealthStatusPatients.forEach((entry) => {
            entry.drugs.forEach((drug) => {
                if (this.posibleRecDrugsList.length === 0) {
                    this.posibleRecDrugsList.push(drug);
                }
                else {
                    const f = this.posibleRecDrugsList.find((element) => drug.id === element.id);
                    if (f === undefined) {
                        this.posibleRecDrugsList.push(drug);
                    }
                }
            });
        });
    }
    getRecommendedDrugs() {
        if (this.posibleRecDrugsList.length === 0) {
            throw new Error('Parameter is not a number!');
        }
        this.posibleRecDrugsList.forEach((drug) => {
            this.validateDuplicatedDrugs(drug);
        });
    }
    validateDuplicatedDrugs(drugPar) {
        const f = this.patientDrugsList.find((drug) => drug.id === drugPar.id);
        const f2 = this.patientDrugsList.find((drug) => drugPar.id === drug.id);
        if (this.recommendedDrugs.length === 0 && f === undefined) {
            this.recommendedDrugs.push(drugPar);
        }
        else if (f2 === undefined) {
            this.recommendedDrugs.push(drugPar);
        }
    }
};
CoreEvolutionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], CoreEvolutionService);
exports.CoreEvolutionService = CoreEvolutionService;
//# sourceMappingURL=core-evolution.service.js.map