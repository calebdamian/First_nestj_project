import { Module } from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { EvolutionController } from './evolution.controller';
import { CoreEvolutionService } from 'src/services/core-evolution/core-evolution.service';
import { EvolutionEntity } from './entities/evolution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientService } from 'src/patient/patient.service';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { EntryEntity } from 'src/entry/entities/entry.entity';

@Module({
  controllers: [EvolutionController],
  providers: [EvolutionService, CoreEvolutionService, PatientService],
  imports: [
    TypeOrmModule.forFeature([
      EvolutionEntity,
      PatientEntity,
      UserEntity,
      EntryEntity,
    ]),
  ],
})
export class EvolutionModule {}
