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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(createUserDto) {
        const newUser = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(newUser);
    }
    findAllUsers() {
        return this.usersRepository.find();
    }
    findOneUserById(id) {
        return this.usersRepository.findOne({ where: { id } });
    }
    findOneUserByEmail(email) {
        return this.usersRepository.findOneBy({ email });
    }
    async updateUser(id, updateUserDto) {
        const userFound = await this.usersRepository.findOneBy({ id });
        if (!userFound) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updatedUser = Object.assign(userFound, updateUserDto);
        return await this.usersRepository.save(updatedUser);
    }
    async removeUser(id) {
        const userFound = await this.usersRepository.findOneBy({ id });
        if (!userFound) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map