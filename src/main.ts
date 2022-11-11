import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(passport.initialize());
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}
bootstrap();
