import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import * as passport from "passport";

import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // abortOnError permite lanzar el error (si es que existe) en vez de terminar la aplicacion
  app.enableCors(); //necesario para poder llamar a la API desde otro dominio;

  /*app.use(
    session({
      secret: 'ingweb',//se recomienda usar variables de entorno
      //las sesiones se deben guardar en redis o en la base de datos, no en el session storage
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360 },
    }),
  );*/
  app.use(passport.initialize());
  //app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
