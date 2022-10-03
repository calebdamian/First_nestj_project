import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //necesario para poder llamar a la API desde otro dominio
  await app.listen(3000);
}
bootstrap();
