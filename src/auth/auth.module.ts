import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';
//import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    AdminModule,
    //PassportModule.register({ session: true }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, /*LocalStrategy*/ JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
