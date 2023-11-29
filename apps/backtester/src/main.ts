import { NestFactory } from '@nestjs/core';
import { BacktesterModule } from './backtester.module';

async function bootstrap() {
  const app = await NestFactory.create(BacktesterModule);
  await app.listen(3000);
}
bootstrap();
