import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'; //importar MONGOOSE
@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/web-proj?directConnection=true'
    , {
      dbName: 'web-proj',
      useNewUrlParser: true,
    })
  ], //se agrega el modulo de MOONGOOSE importado
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

//module es una parte de la app