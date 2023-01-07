import { HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity | HttpException>;
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    findOne(id: number): Promise<import("./entities/user.entity").UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<HttpException | (import("./entities/user.entity").UserEntity & UpdateUserDto)>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
