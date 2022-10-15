import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';


//tiene el decorador Injectable, por lo que se considera un Pipe

/*Pipes have two typical use cases:
transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, 
simply pass it through unchanged; otherwise, 
throw an exception when the data is incorrect */
@Injectable()
export class UsersService {
    //el servicio define los métodos
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {

    }

    //userModel es la conexión a MongoDb
    //es promesa por que utiliza asincronía
    async getUsers(): Promise<IUser[]> {
        const users = await this.userModel.find();
        return users;
    }


    async getUserById(userId: string): Promise<IUser> {
        const foundUser = await this.userModel.findById(userId);
        return foundUser;
    }

    async findByUsername(username: string) {
        const foundUser = await this.userModel.findOne({ username });
        return foundUser;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<IUser> {
        const createdUser = new this.userModel(createUserDTO); //pilas con el NEW
        //solo se ha creado el objeto, no se ha persistido
        return await createdUser.save();
        //se ha persistido el obj
    }


    async deleteUser(userId: string): Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        return deletedUser;
    }


    async updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<IUser> {
        const updatedProduct = await this.userModel.findByIdAndUpdate(userId, createUserDTO, { new: true });
        //new:true para que nos devuelva el objeto nuevo (no el que actualizamos)
        return updatedProduct;
    }

}
