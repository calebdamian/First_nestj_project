import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/orm.config';
import { AdminModule } from './admin/admin.module';
import { ClHistModule } from './cl_hist/cl_hist.module';

// TODO: agregar documentacion con swagger
@Module({
  imports: [
    AuthModule,
    PatientModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    AdminModule,
    ClHistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
