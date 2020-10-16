import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle("Todo document")
    .setDescription('The Todo document API')
    .setVersion('1.0')
    .addTag('todos')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(3028, function(){
    console.log(`Server running on  http://localhost:3028`);
  });
}
bootstrap();
