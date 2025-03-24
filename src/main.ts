import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe()); //Za validacijo da napiše če je kej narobe pri POST
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();1