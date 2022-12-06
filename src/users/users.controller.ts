import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user/signup')
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('users')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  findAll() {
    return this.usersService.findAllUsers();
  }
  //@UseGuards(JwtAuthGuard)
  @Get('user/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneUserById(id);
  }
  //@UseGuards(JwtAuthGuard)
  @Put('user/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Delete('user/:id')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeUser(id);
  }
}
