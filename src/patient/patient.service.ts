import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  /*  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUserById(userId: string): Promise<User> {
    const foundUser = await this.userModel.findById(userId);
    return foundUser;
  }

  async findByUsername(username: string) {
    const foundUser = await this.userModel.findOne({ username });
    return foundUser;
  }

  async createUser(createUserDTO: CreatePatientDto): Promise<User> {
    const createdUser = new this.userModel(createUserDTO);
    return await createdUser.save();
  }

  async deleteUser(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    return deletedUser;
  }

  async updateUser(
    userId: string,
    createUserDTO: CreatePatientDto,
  ): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }*/
}
