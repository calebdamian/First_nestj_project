import { Controller, Delete, Get, HttpStatus, Post, Put, Res, Body } from '@nestjs/common';

//importar la clase DTO necesaria para establecer las propiedades que recibimos del cliente
import { CreateUserDTO } from './dto/user.dto';
//maneja rutas del servidor
@Controller('user')
export class UserController {

    @Get('/get')
    getUser() {

    }
    //createUserDTO se transfiere a través de la app cliente
    @Post('/create')
    createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        //console.log(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }
    @Put('/update')
    updateUser() {

    }

    @Delete('/delete')
    deleteUser() {

    }
}
