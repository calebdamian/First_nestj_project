import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorEntity } from './entity/admin.entity';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [TypeOrmModule.forFeature([AdministratorEntity])],
  exports: [AdminService],
})
export class AdminModule {}
