import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const ConfigsService: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 3001
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    ConfigsService
  )
  app.listen();
}
bootstrap();
