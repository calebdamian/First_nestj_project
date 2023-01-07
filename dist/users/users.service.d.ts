import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAllUsers(): Promise<UserEntity[]>;
    findOneUserById(id: number): Promise<UserEntity>;
    findOneUserByEmail(email: string): Promise<UserEntity>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<HttpException | (UserEntity & UpdateUserDto)>;
    removeUser(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
