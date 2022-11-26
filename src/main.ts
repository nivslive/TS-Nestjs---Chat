import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3333',
      'http://localhost:8000',
      'http://localhost:3001',
    ],
  });
  await app.listen(3333);
}
bootstrap();
