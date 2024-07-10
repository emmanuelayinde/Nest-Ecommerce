import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import config from '@config/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  // Validation Setup
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // OpenAPI - Swagger Setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestCommerce APIs')
    .setDescription('NestCommerce API Documentations')
    .setVersion('1.0')
    .addTag('commerce')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(config.PORT);
}
bootstrap();
