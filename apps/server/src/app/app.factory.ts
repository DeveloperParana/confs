import { NestExpressApplication } from '@nestjs/platform-express';
import { NestApplicationOptions, Type, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

interface AppOptions extends NestApplicationOptions {
  entry: Type<unknown>;
  cors?: boolean;
  origin?: boolean | RegExp[] | string | string[];
  production: boolean;
}

const appMessage = (port: number, prefix: string) => {
  return `🚀 Application is running on: http://localhost:${port}/${prefix}`;
};

export const appFactory = async <T extends NestExpressApplication>(
  options: AppOptions
) => {
  const { entry, production, origin, ...config } = options;
  const app = await NestFactory.create<T>(entry, config);

  app.useGlobalPipes(new ValidationPipe());

  let prefix = '';

  if (production) {
    app.enableCors({ origin });
  } else {
    prefix = 'api';
    app.setGlobalPrefix(prefix);
  }

  const port = process.env.PORT ? +process.env.PORT : 3333;
  const message = appMessage(port, prefix);

  return { app, prefix, port, message };
};
