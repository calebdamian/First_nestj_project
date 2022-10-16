import { Controller, Delete, Get, HttpStatus, Post, Put, Res, Body, NotFoundException, UseGuards } from '@nestjs/common';
import { Param, Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

//importar la clase DTO necesaria para establecer las propiedades que recibimos del cliente
import { CreateUserDTO } from './dto/user.dto';
//maneja rutas del servidor

import { UsersService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('auth/user') //se declara la ruta global de user para no tener que declararla en cada metodo
//COMMENT: se puede establecer un decorador personalizado para determinar aquellas rutas
// que deberian ser publicas, es decir que no requeriran autenticacion
export class UserController {

    constructor(private userService: UsersService) {

    }
    //createUserDTO se transfiere a través de la app cliente
    //el nombre del metodo puede ser cualquiera, Nest no lo limita
    @Post('/create')
    //el parametro Res corresponde a un objeto de la libreria Express
    //al declarar el objeto de tipo Res estamos diciendo a Nest que usaremos Express
    //por lo que no procesara el objeto de manera 'nativa'
    async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        //console.log(createUserDTO);
        //debemos llamar a nuestra instancia del Servicio
        const user = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User successfully created',
            user
        });
    }

    @Get()
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        res.status(HttpStatus.OK).json({
            users
        });
    }

    //aqui le decimos que requerimos el parámetro del Id del user, y que la ruta tendrá el Id del usuario 
    @Get('/:userId')
    async getUser(@Res() res, @Param('userId') userId) {
        const user = await this.userService.getUserById(userId);
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
        });
    }

    @Put('/update/:userId')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('userId') userId) {
        const updatedUser = await this.userService.updateUser(userId, createUserDTO);
        if (!updatedUser) throw new NotFoundException('User does not exist!'); //por si no existe
        return res.status(HttpStatus.OK).json({
            message: 'User updated successfully',
            updatedUser
        });
    }
}
