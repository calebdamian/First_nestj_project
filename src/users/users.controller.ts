import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserProfileDto } from './dto/create-profile.dto';
import { UpdateUserProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Post('user/:id/profile')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.usersService.createUserProfile(id, createUserProfileDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Put('user/:id/profile')
  updateUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.usersService.updateUserProfile(id, updateUserProfileDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Get('user/:id/profile')
  findUserProfile(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneProfileById(id);
  }
  //@UseGuards(JwtAuthGuard)
  @Get('users')
  findAll() {
    return this.usersService.findAllUsers();
  }
  //@UseGuards(JwtAuthGuard)
  @Get('user/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneUserById(+id);
  }
  //@UseGuards(JwtAuthGuard)
  @Put('user/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Delete('user/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeUser(id);
  }
}
