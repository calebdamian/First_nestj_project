import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateAdminProfileDto } from './dto/create-admin-profile.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdministratorEntity } from './entity/admin.entity';
import { Administrator_ProfileEntity } from './entity/admin.profile.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdministratorEntity)
    private adminRepository: Repository<AdministratorEntity>,
    @InjectRepository(Administrator_ProfileEntity)
    private adminProfileRepository: Repository<Administrator_ProfileEntity>,
  ) {}
  //TODO: Al crear el admin, debo crear un perfil para asignarle, por lo que pido todos los datos, incluyendo los del perfil
  async createAdmin(createAdminDto: CreateAdminDto) {
    /* const user = await this.userService.findOneUserById(createAdminDto.userId);

    if (user) {
      createAdminDto.userId = 1;

      const profile = this.createAdminProfile(createAdminProfileDto);

      if (profile) {
        createAdminDto.adminProfileId = 1;

        await this.adminRepository.save(createAdminDto);
      }
    }*/
    return 'Admin creation';
  }

  async createAdminProfile(createAdminProfileDto: CreateAdminProfileDto) {
    const existingProfile = this.adminProfileRepository.find();
    if ((await existingProfile).length > 0) {
      return new HttpException(
        'Admin already has a profile',
        HttpStatus.CONFLICT,
      );
    }
    const newAdminProfile = this.adminProfileRepository.create(
      createAdminProfileDto,
    );

    return this.adminProfileRepository.save(newAdminProfile);
  }

  findAllAdmins(): Promise<AdministratorEntity[]> {
    return this.adminRepository.find();
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
