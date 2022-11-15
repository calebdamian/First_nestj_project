import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileDto } from './dto/create-profile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserProfileEntity } from './entities/user.profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(UserProfileEntity)
    private userProfileRepository: Repository<UserProfileEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const usersFound = await this.usersRepository.find();

    if (usersFound.length > 0) {
      return new HttpException(
        'User already created',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newUser = this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(newUser);
  }

  async createUserProfile(
    id: number,
    createUserProfileDto: CreateUserProfileDto,
  ) {
    const foundUser = await this.usersRepository.findOneBy({ id });
    if (!foundUser)
      throw new HttpException(
        'User not found. Cannot create profile.',
        HttpStatus.BAD_REQUEST,
      );

    const newProfile = this.userProfileRepository.create(createUserProfileDto);

    const savedProfile = await this.userProfileRepository.save(newProfile);

    foundUser.profile = savedProfile;

    return this.usersRepository.save(foundUser);
  }

  async updateUserProfile(
    id: number,
    updateUserProfileDto: UpdateUserProfileDto,
  ) {
    const profileFound = await this.userProfileRepository.findOneBy({ id });
    if (!profileFound)
      return new HttpException('Profile not found', HttpStatus.NOT_FOUND);

    const updatedProfile = Object.assign(profileFound, updateUserProfileDto);

    return await this.userProfileRepository.save(updatedProfile);
  }
  findAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOneProfileById(id: number) {
    return await this.userProfileRepository.findOneBy({ id });
  }

  findOneUserById(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { id } });
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
