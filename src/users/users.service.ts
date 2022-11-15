import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministratorEntity } from 'src/admin/entity/admin.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const usersFound = await this.usersRepository.find();

    if (usersFound.length > 0) {
      return new HttpException(
        'User already created',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    return await this.usersRepository.save(createUserDto);
  }

  findAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOneUserById(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.usersRepository.findOneBy({ id });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const updatedUser = Object.assign(userFound, updateUserDto);

    return await this.usersRepository.save(updatedUser);
  }

  async removeUser(id: number) {
    const userFound = await this.usersRepository.findOneBy({ id });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return await this.usersRepository.delete(id);
  }
}
