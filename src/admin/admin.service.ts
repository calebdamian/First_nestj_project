import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  async create(createAdminDto: CreateAdminDto) {
    const adminFound = await this.findAll();
    if (adminFound.length > 0) {
      return new HttpException(
        'Admin already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newAdmin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find({
      relations: ['pacientes'],
    });
  }

  async findByUsername(nombre_usuario: string) {
    const admin = await this.adminRepository
      .createQueryBuilder('administrador')
      .where('administrador.nombre_usuario= :nombre_usuario', {
        nombre_usuario: { nombre_usuario },
      })
      .getOne();

    return admin;
  }

  async findById(id: number) {
    const adminFound = await this.adminRepository.findOne({
      where: { id },
      relations: ['pacientes'],
    });

    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }
    return adminFound;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const adminFound = await this.adminRepository.findOne({
      where: { id },
    });

    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    const updateAdmin = Object.assign(adminFound, updateAdminDto);

    return await this.adminRepository.save(updateAdmin);
  }
}
