import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3028, function(){
    console.log(`Server running on  http://localhost:3028`);
  });
}
bootstrap();
