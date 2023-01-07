"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../users/entities/user.entity");
const bcrypt = __importStar(require("bcrypt"));
const drug_entity_1 = require("../../drug/entities/drug.entity");
const drugs_json_1 = __importDefault(require("./drugs.json"));
class InitialDatabaseSeed {
    async run(dataSource, factoryManager) {
        const userRepository = dataSource.getRepository(user_entity_1.UserEntity);
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash('admin123', salt);
        await userRepository.insert([
            {
                firstName: 'Caleb',
                lastName: 'Naranjo',
                email: 'admin@admin.com',
                password: password,
            },
        ]);
        const drugRepository = dataSource.getRepository(drug_entity_1.DrugEntity);
        await drugRepository.insert(drugs_json_1.default);
    }
}
exports.default = InitialDatabaseSeed;
//# sourceMappingURL=initial.seed.js.map