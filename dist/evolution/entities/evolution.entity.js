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
exports.EvolutionEntity = void 0;
const drug_entity_1 = require("../../drug/entities/drug.entity");
const patient_entity_1 = require("../../patient/entity/patient.entity");
const typeorm_1 = require("typeorm");
let EvolutionEntity = class EvolutionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EvolutionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], EvolutionEntity.prototype, "beginDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], EvolutionEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EvolutionEntity.prototype, "diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EvolutionEntity.prototype, "initialHealthStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EvolutionEntity.prototype, "currentHealthStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EvolutionEntity.prototype, "stringHealthStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => drug_entity_1.DrugEntity, {
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], EvolutionEntity.prototype, "recommendedDrugs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.PatientEntity, {
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", patient_entity_1.PatientEntity)
], EvolutionEntity.prototype, "patient", void 0);
EvolutionEntity = __decorate([
    (0, typeorm_1.Entity)('evolution')
], EvolutionEntity);
exports.EvolutionEntity = EvolutionEntity;
//# sourceMappingURL=evolution.entity.js.map