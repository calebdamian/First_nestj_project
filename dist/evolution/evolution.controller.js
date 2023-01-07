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
exports.EvolutionController = exports.EvolutionInterface = void 0;
const common_1 = require("@nestjs/common");
const evolution_service_1 = require("./evolution.service");
class EvolutionInterface {
    constructor(patientId, beginDate, diagnosis, endDate) {
        this.patientId = patientId;
        this.beginDate = beginDate;
        this.diagnosis = diagnosis;
        this.endDate = endDate;
    }
}
exports.EvolutionInterface = EvolutionInterface;
let EvolutionController = class EvolutionController {
    constructor(evolutionService) {
        this.evolutionService = evolutionService;
    }
    createEvolution(evolutionParam) {
        const evolution = this.evolutionService.createEvolution(evolutionParam);
        return evolution;
    }
    getAllEvolutions() {
        return this.evolutionService.findAll();
    }
    findEvolutionsByPatientId(patientid) {
        return this.evolutionService.findEvolutionsByPatientId(patientid);
    }
    getCoreEvols(params) {
        return this.evolutionService.findCoreEvolutions(params.patientId, params.beginDate, params.endDate, params.diagnosis);
    }
    remove(id) {
        return this.evolutionService.remove(id);
    }
    getReport(params) {
        return this.evolutionService.report(params.initialHealthStatus, params.currentHealthStatus);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EvolutionInterface]),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "createEvolution", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "getAllEvolutions", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "findEvolutionsByPatientId", null);
__decorate([
    (0, common_1.Post)('/core'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "getCoreEvols", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/report'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EvolutionController.prototype, "getReport", null);
EvolutionController = __decorate([
    (0, common_1.Controller)('evolutions'),
    __metadata("design:paramtypes", [evolution_service_1.EvolutionService])
], EvolutionController);
exports.EvolutionController = EvolutionController;
//# sourceMappingURL=evolution.controller.js.map