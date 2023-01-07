"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDrugDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_drug_dto_1 = require("./create-drug.dto");
class UpdateDrugDto extends (0, swagger_1.PartialType)(create_drug_dto_1.CreateDrugDto) {
}
exports.UpdateDrugDto = UpdateDrugDto;
//# sourceMappingURL=update-drug.dto.js.map