import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // abortOnError permite lanzar el error (si es que existe) en vez de terminar la aplicacion
  app.enableCors(); //necesario para poder llamar a la API desde otro dominio
  await app.listen(3000);
}
bootstrap();
