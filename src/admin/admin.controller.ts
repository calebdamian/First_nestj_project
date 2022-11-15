import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UseGuards, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
//import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { AdminService } from './admin.service';
import { CreateAdminProfileDto } from './dto/create-admin-profile.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/admin')
  public async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }
  @Post('/admin/profile')
  public async createProfile(
    @Body() createAdminProfileDto: CreateAdminProfileDto,
  ) {
    return this.adminService.createAdminProfile(createAdminProfileDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Get('/admins')
  findAll() {
    return this.adminService.findAllAdmins();
  }
  //@UseGuards(JwtAuthGuard)
  /**@Get('admin/:nombre_usuario')
  findByUsername(@Param('nombre_usuario') nombre_usuario: string) {
    return this.adminService.findByUsername(nombre_usuario);
  }**/
  //@UseGuards(JwtAuthGuard)
  /**@Patch('admin/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }**/
}
