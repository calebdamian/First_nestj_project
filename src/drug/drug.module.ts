import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrugEntity } from './entities/drug.entity';

@Module({
  controllers: [DrugController],
  imports: [TypeOrmModule.forFeature([DrugEntity])],
  providers: [DrugService],
})
export class DrugModule {}
