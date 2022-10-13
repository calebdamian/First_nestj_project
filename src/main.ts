import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // abortOnError permite lanzar el error (si es que existe) en vez de terminar la aplicacion
  app.enableCors(); //necesario para poder llamar a la API desde otro dominio
  app.use(
    session({
      secret: 'pass',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
