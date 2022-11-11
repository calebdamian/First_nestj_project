import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

// TODO: agregar documentacion con swagger
@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://caleb:admin@primercluster.2xexdyw.mongodb.net/web-proj',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
