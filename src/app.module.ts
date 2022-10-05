import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'; //importar MONGOOSE
@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/web-proj')
  ], //se agrega el modulo de MOONGOOSE importado
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

//module es una parte de la app