import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/admin/entity/admin.entity';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'process.env.JWT_SECRET',
      signOptions: { expiresIn: '120s' },
    }),
    AdminModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
