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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const parse_int_pipe_1 = require("@nestjs/common/pipes/parse-int.pipe");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt.auth.guard");
const create_entry_dto_1 = require("../entry/dto/create-entry.dto");
const create_patient_dto_1 = require("./dto/create-patient.dto");
const update_patient_dto_1 = require("./dto/update-patient.dto");
const patient_service_1 = require("./patient.service");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async create(request, createPatientDto) {
        const userEmail = request.user.email;
        const patient = await this.patientService.createPatient(userEmail, createPatientDto);
        return patient.id;
    }
    async createEntry(request, id, createEntryDto) {
        const entry = await this.patientService.createEntry(id, createEntryDto);
        return entry.id;
    }
    async getEntries(request, id) {
        const entries = await this.patientService.getPatientEntries(id);
        return entries;
    }
    async getAllEntries() {
        const entries = await this.patientService.getAllEntries();
        return entries;
    }
    async findAllPatients(res) {
        const patients = await this.patientService.findAllPatients();
        res.status(common_1.HttpStatus.OK).json(patients);
    }
    async getPatientByNumId(res, id_card) {
        const patient = await this.patientService.findOnePatientByCardId(id_card);
        return res.status(common_1.HttpStatus.OK).json({ patient });
    }
    async getPatientById(res, id) {
        const patient = await this.patientService.findOnePatientById(id);
        return res.status(common_1.HttpStatus.OK).json(patient);
    }
    async deletePatient(res, id) {
        const userDeleted = await this.patientService.deletePatient(id);
        if (!userDeleted)
            throw new common_1.NotFoundException('User does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Patient deleted successfully',
            userDeleted,
        });
    }
    async updatePatient(res, updatePatientDto, id) {
        const updatedPatient = await this.patientService.updatePatient(id, updatePatientDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Patient updated successfully',
            updatedPatient,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiUnprocessableEntityResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    __param(0, (0, route_params_decorator_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/entries'),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiUnprocessableEntityResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    __param(0, (0, route_params_decorator_1.Req)()),
    __param(1, (0, route_params_decorator_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_entry_dto_1.CreateEntryDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "createEntry", null);
__decorate([
    (0, common_1.Get)(':id/entries'),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiUnprocessableEntityResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    __param(0, (0, route_params_decorator_1.Req)()),
    __param(1, (0, route_params_decorator_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getEntries", null);
__decorate([
    (0, common_1.Get)('/entries'),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiUnprocessableEntityResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getAllEntries", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "findAllPatients", null);
__decorate([
    (0, common_1.Get)(':id-card'),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, route_params_decorator_1.Param)('id-card')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatientByNumId", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatientById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deletePatient", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiUnprocessableEntityResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_patient_dto_1.UpdatePatientDto, Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatient", null);
PatientController = __decorate([
    (0, swagger_1.ApiTags)('Patients'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('patients'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
exports.PatientController = PatientController;
//# sourceMappingURL=patient.controller.js.map