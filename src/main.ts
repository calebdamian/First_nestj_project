import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const swaggerConfig = new DocumentBuilder()
    .setTitle('SIGHC-API')
    .setDescription(
      'API REST to manage patients medical records along with their health status',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors();
  app.use(passport.initialize());
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}
bootstrap();
