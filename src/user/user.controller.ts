import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Res,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import {
  Param,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

import { CreateUserDTO } from './dto/user.dto';

import { UsersService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('auth/user')
export class UserController {
  constructor(private userService: UsersService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User successfully created',
      user,
    });
  }

  @Get()
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    res.status(HttpStatus.OK).json({
      users,
    });
  }

  @Get('/:userId')
  async getUser(@Res() res, @Param('userId') userId) {
    const user = await this.userService.getUserById(userId);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/delete/:userId')
  async deleteUser(@Res() res, @Param('userId') userId) {
    const userDeleted = await this.userService.deleteUser(userId);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      userDeleted,
    });
  }

  @Put('/update/:userId')
  async updateUser(
    @Res() res,
    @Body() createUserDTO: CreateUserDTO,
    @Param('userId') userId,
  ) {
    const updatedUser = await this.userService.updateUser(
      userId,
      createUserDTO,
    );
    if (!updatedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      updatedUser,
    });
  }
}
