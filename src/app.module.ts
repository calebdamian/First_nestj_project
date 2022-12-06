//import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientModule } from './patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/orm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EntryModule } from './entry/entry.module';
import { DrugModule } from './drug/drug.module';
@Module({
  imports: [
    PatientModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UsersModule,
    AuthModule,
    EntryModule,
    DrugModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
