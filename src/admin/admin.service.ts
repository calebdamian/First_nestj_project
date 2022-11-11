import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entity/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    const newAdmin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  findAll(): Promise<Admin[]> {
    const admins = this.adminRepository.find();
    return admins;
  }

  async findByUsername(nombre_usuario: string) {
    const admin = await this.adminRepository
      .createQueryBuilder('administrador')
      .where('administrador.nombre_usuario= :nombre_usuario', {
        nombre_usuario: nombre_usuario,
      })
      .getOne();
    return admin;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
