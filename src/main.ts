import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Make sure that incoming request does not contains extra not requested information
      // It means that body must be EXACTLY equal to DTO
      whitelist: true,
    }),
  );
  await app.listen(3030);
}
bootstrap();
