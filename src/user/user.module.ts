import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ]) //esta es la definición del modelo USER con el uso de Mongoose
  ],
  controllers: [UserController],
  providers: [UsersService]
})
export class UsersModule { }
