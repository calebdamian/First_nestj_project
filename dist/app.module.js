"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const patient_module_1 = require("./patient/patient.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("./database/config/orm.config");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const drug_module_1 = require("./drug/drug.module");
const evolution_module_1 = require("./evolution/evolution.module");
const core_evolution_service_1 = require("./services/core-evolution/core-evolution.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            patient_module_1.PatientModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot((0, orm_config_1.ormConfig)()),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            drug_module_1.DrugModule,
            evolution_module_1.EvolutionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [core_evolution_service_1.CoreEvolutionService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map