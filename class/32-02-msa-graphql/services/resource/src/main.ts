import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// subgraph라고 볼 수 있음.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
