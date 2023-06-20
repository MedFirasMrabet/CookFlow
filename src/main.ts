import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


const cors = require('cors');


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Kitchen Management API')
    .setDescription('The Kitchen Management API description')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      // Add 'multipart/form-data' to the 'consumes' array
      consumes: ['application/json', 'multipart/form-data'],
    },
  });
  await app.use(cors());

  // app.useStaticAssets('uploads', {
  //   prefix: '/uploads',
  //   index: false, // Disable index file
  //   redirect: false, // Disable redirect
  // });
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    index: false,
    prefix: '/uploads',
  });
  
  // app.use(cors({
  //   origin: 'http://localhost:4200'
  // }));
  // app.enableCors(); // This enables CORS

  await app.listen(3000);
}
bootstrap();
