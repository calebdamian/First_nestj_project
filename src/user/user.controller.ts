import { Controller, Delete, Get, HttpStatus, Post, Put, Res, Body } from '@nestjs/common';

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
            message: 'OK',
            user: user
        });
    }

}
