import { Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';

//maneja rutas del servidor
@Controller('user')
export class UserController {

    @Get('/get')
    getUser() {

    }
    @Post('/create')
    createUser(@Res() res) {
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
