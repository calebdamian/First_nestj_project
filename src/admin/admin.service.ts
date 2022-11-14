import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdministratorEntity } from './entity/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdministratorEntity)
    private adminRepository: Repository<AdministratorEntity>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    /*const adminFound = await this.findAll();
    /* if (adminFound.length > 0) {
      return new HttpException(
        'Admin already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newAdmin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
    */
    return 'Admin created';
  }

  findAll() /*: Promise<Admin[]> */ {
    //return this.adminRepository.find();
    return 'Admin found';
  }

  async findByUsername(nombre_usuario: string) {
    /**const admin = await this.adminRepository.findOne({
      where: { nombre_usuario },
    });

    return admin;**/
    return 'Admin found';
  }

  async findById(id: number) {
    /*
    const adminFound = await this.adminRepository.findOne({
      where: { id },
    });
    return adminFound;*/
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    /*const adminFound = await this.adminRepository.findOne({
      where: { id },
    });

    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    const updateAdmin = Object.assign(adminFound, updateAdminDto);

    return await this.adminRepository.save(updateAdmin);
  */
    return 'Admin updated';
  }
}
