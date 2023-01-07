"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionModule = void 0;
const common_1 = require("@nestjs/common");
const evolution_service_1 = require("./evolution.service");
const evolution_controller_1 = require("./evolution.controller");
const core_evolution_service_1 = require("../services/core-evolution/core-evolution.service");
const evolution_entity_1 = require("./entities/evolution.entity");
const typeorm_1 = require("@nestjs/typeorm");
const patient_service_1 = require("../patient/patient.service");
const patient_entity_1 = require("../patient/entity/patient.entity");
const user_entity_1 = require("../users/entities/user.entity");
const entry_entity_1 = require("../entry/entities/entry.entity");
let EvolutionModule = class EvolutionModule {
};
EvolutionModule = __decorate([
    (0, common_1.Module)({
        controllers: [evolution_controller_1.EvolutionController],
        providers: [evolution_service_1.EvolutionService, core_evolution_service_1.CoreEvolutionService, patient_service_1.PatientService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                evolution_entity_1.EvolutionEntity,
                patient_entity_1.PatientEntity,
                user_entity_1.UserEntity,
                entry_entity_1.EntryEntity,
            ]),
        ],
    })
], EvolutionModule);
exports.EvolutionModule = EvolutionModule;
//# sourceMappingURL=evolution.module.js.map