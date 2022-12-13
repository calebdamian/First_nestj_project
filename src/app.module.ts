//import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientModule } from './patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/orm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DrugModule } from './drug/drug.module';
import { EvolutionModule } from './evolution/evolution.module';
import { CoreEvolutionService } from './services/core-evolution/core-evolution.service';

@Module({
  imports: [
    PatientModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UsersModule,
    AuthModule,
    DrugModule,
    EvolutionModule,
  ],
  controllers: [AppController],
  providers: [CoreEvolutionService],
})
export class AppModule {}
