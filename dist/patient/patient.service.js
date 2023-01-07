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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patient_entity_1 = require("./entity/patient.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const entry_entity_1 = require("../entry/entities/entry.entity");
let PatientService = class PatientService {
    constructor(patientRepository, usersRepository, entryRepository) {
        this.patientRepository = patientRepository;
        this.usersRepository = usersRepository;
        this.entryRepository = entryRepository;
    }
    async createPatient(userEmail, createPatientDto) {
        const foundUser = await this.usersRepository.findOneBy({
            email: userEmail,
        });
        if (!foundUser)
            throw new common_1.HttpException('Admin user not found. Cannot create patient.', common_1.HttpStatus.BAD_REQUEST);
        const newPatient = this.patientRepository.create(Object.assign(Object.assign({}, createPatientDto), { user: foundUser }));
        return await this.patientRepository.save(newPatient);
    }
    async createEntry(patientId, createEntryDto) {
        const foundPatient = await this.patientRepository.findOneBy({
            id: patientId,
        });
        if (!foundPatient) {
            throw new common_1.HttpException('Patient not found. Cannot create entry.', common_1.HttpStatus.BAD_REQUEST);
        }
        const newEntry = this.entryRepository.create(Object.assign(Object.assign({}, createEntryDto), { drugs: createEntryDto.drugsIds.map((drugId) => ({ id: drugId })), patient: foundPatient }));
        return await this.entryRepository.save(newEntry);
    }
    async getPatientEntries(patientId) {
        const foundPatient = await this.patientRepository.findOneBy({
            id: patientId,
        });
        if (!foundPatient) {
            throw new common_1.HttpException('Patient not found. Cannot get entries.', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.entryRepository.find({
            where: { patient: { id: patientId } },
        });
    }
    async getAllEntries() {
        const entries = await this.entryRepository.find();
        return entries;
    }
    async updatePatient(id, updatePatientDto) {
        const foundPatient = await this.patientRepository.findOneBy({ id });
        if (!foundPatient) {
            return new common_1.HttpException('Patient not found at update', common_1.HttpStatus.NOT_FOUND);
        }
        const updatedPatient = Object.assign(foundPatient, updatePatientDto);
        return await this.patientRepository.save(updatedPatient);
    }
    async deletePatient(id) {
        const foundPatient = await this.patientRepository.findOneBy({ id });
        if (!foundPatient) {
            return new common_1.HttpException('Patient not found at delete', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.patientRepository.delete(id);
    }
    async findAllPatients() {
        return this.patientRepository.find();
    }
    async findOnePatientByCardId(idCard) {
        const foundPatient = await this.patientRepository.findOneBy({ idCard });
        if (!foundPatient) {
            return new common_1.HttpException('Patient not found at findOneByCardId', common_1.HttpStatus.NOT_FOUND);
        }
        return foundPatient;
    }
    async findOnePatientById(id) {
        const foundPatient = await this.patientRepository.findOneBy({ id });
        if (!foundPatient) {
            return new common_1.HttpException('Patient not found ad findOneByPk', common_1.HttpStatus.NOT_FOUND);
        }
        return foundPatient;
    }
};
PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.PatientEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(entry_entity_1.EntryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map