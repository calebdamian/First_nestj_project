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
exports.EntryEntity = void 0;
const class_validator_1 = require("class-validator");
const drug_entity_1 = require("../../drug/entities/drug.entity");
const patient_entity_1 = require("../../patient/entity/patient.entity");
const typeorm_1 = require("typeorm");
let EntryEntity = class EntryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EntryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], EntryEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EntryEntity.prototype, "healthStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryEntity.prototype, "diagnosis", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.PatientEntity, (patient) => patient.medicalRecord, {
        eager: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", patient_entity_1.PatientEntity)
], EntryEntity.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => drug_entity_1.DrugEntity, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], EntryEntity.prototype, "drugs", void 0);
EntryEntity = __decorate([
    (0, typeorm_1.Entity)('entry')
], EntryEntity);
exports.EntryEntity = EntryEntity;
//# sourceMappingURL=entry.entity.js.map