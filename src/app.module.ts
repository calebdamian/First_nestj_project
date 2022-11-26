//import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/orm.config';
import { UsersModule } from './users/users.module';
import { MedicalRecordModule } from './medicalrecord/medicalrecord.module';
import { AuthModule } from './auth/auth.module';
import { EntryModule } from './entry/entry.module';
import { DrugModule } from './drug/drug.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
// TODO: agregar documentacion con swagger
@Module({
  imports: [
    PatientModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UsersModule,
    MedicalRecordModule,
    AuthModule,
    EntryModule,
    DrugModule,
    DiagnosisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
