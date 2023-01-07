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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patient_entity_1 = require("../patient/entity/patient.entity");
const core_evolution_service_1 = require("../services/core-evolution/core-evolution.service");
const typeorm_2 = require("typeorm");
const evolution_entity_1 = require("./entities/evolution.entity");
let EvolutionService = class EvolutionService {
    constructor(coreEvolutionService, evolutionRepository, patientRepository) {
        this.coreEvolutionService = coreEvolutionService;
        this.evolutionRepository = evolutionRepository;
        this.patientRepository = patientRepository;
    }
    async createEvolution(createEvolutionInt) {
        try {
            const foundPatient = await this.patientRepository.findOneBy({
                id: createEvolutionInt.patientId,
            });
            if (!foundPatient) {
                throw new common_1.HttpException('Patient not found. Cannot create evolution.', common_1.HttpStatus.BAD_REQUEST);
            }
            let createEvolDto;
            await this.coreEvolutionService
                .getEvolution(createEvolutionInt)
                .then((res) => (createEvolDto = res));
            const newEvol = this.evolutionRepository.create(Object.assign(Object.assign({}, createEvolDto), { recommendedDrugs: createEvolDto.recommendedDrugsIds.map((recommendedDrugsIds) => ({ id: recommendedDrugsIds })), patient: foundPatient }));
            return await this.evolutionRepository.save(newEvol);
        }
        catch (error) {
            throw new common_1.HttpException('No existe evoluciones', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        const evolutions = await this.evolutionRepository.find();
        return evolutions;
    }
    async findEvolutionsByPatientId(patientId) {
        let allEvolutions = this.findAll();
        let auxArray = [];
        await allEvolutions.then((result) => {
            auxArray = result.filter((res) => res.patient.id == patientId);
        });
        return auxArray;
    }
    async findCoreEvolutions(patientId, beginDate, endDate, diagnosis) {
        let allEvolutions = this.findAll();
        let auxArray = [];
        await allEvolutions.then((result) => {
            auxArray = result.filter((res) => res.patient.id == patientId &&
                res.beginDate == beginDate &&
                res.endDate == endDate &&
                res.diagnosis == diagnosis);
        });
        return auxArray;
    }
    update(id, updateEvolutionDto) {
        return `This action updates a #${id} evolution`;
    }
    async remove(id) {
        return await this.evolutionRepository.delete({ id });
    }
    async report(initialHealthStatus, currentHealthStatus) {
        let allEvolutions = this.findAll();
        let auxArray = [];
        await allEvolutions.then((result) => {
            auxArray = result.filter((res) => res.currentHealthStatus >= initialHealthStatus &&
                res.currentHealthStatus <= currentHealthStatus);
        });
        return auxArray;
    }
};
EvolutionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(evolution_entity_1.EvolutionEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(patient_entity_1.PatientEntity)),
    __metadata("design:paramtypes", [core_evolution_service_1.CoreEvolutionService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EvolutionService);
exports.EvolutionService = EvolutionService;
//# sourceMappingURL=evolution.service.js.map