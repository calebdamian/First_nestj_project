import { Controller, Delete, Get, HttpStatus, Post, Put, Res, Body, NotFoundException } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';


//importar la clase DTO necesaria para establecer las propiedades que recibimos del cliente
import { CreateUserDTO } from './dto/user.dto';
//maneja rutas del servidor

import { UsersService } from './user.service';
@Controller('user')
export class UserController {

    constructor(private userService: UsersService) {

    }
    //createUserDTO se transfiere a través de la app cliente
    @Post('/create')
    async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        //console.log(createUserDTO);
        //debemos llamar a nuestra instancia del Servicio
        const user = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User Successfully Created',
            user
        });
    }

    @Get()
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        res.status(HttpStatus.OK).json({
            users
        })
    }

    //aqui le decimos que requerimos el parámetro del Id del user, y que la ruta tendrá el Id del usuario 
    @Get('/:userId')
    async getUser(@Res() res, @Param('userId') userId) {
        const user = await this.userService.getUser(userId);
        if (!user) throw new NotFoundException('User does not exist!'); //por si no existe
        return res.status(HttpStatus.OK).json(user); //retornamos el objeto entero
    }

    @Delete('/delete/:userId')
    async deleteUser(@Res() res, @Param('userId') userId) {
        const userDeleted = await this.userService.deleteUser(userId);
        if (!userDeleted) throw new NotFoundException('User does not exist!'); //por si no existe
        return res.status(HttpStatus.OK).json({
            message: 'User deleted successfully',
            userDeleted
        })
    }

    @Put('/update/:userId')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('userId') userId) {
        const updatedUser = await this.userService.updateUser(userId, createUserDTO);
        if (!updatedUser) throw new NotFoundException('User does not exist!'); //por si no existe
        return res.status(HttpStatus.OK).json({
            message: 'User updated successfully',
            updatedUser
        })
    }
}
