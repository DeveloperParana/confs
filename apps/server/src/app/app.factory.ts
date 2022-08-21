import { NestExpressApplication } from '@nestjs/platform-express';
import { NestApplicationOptions, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

interface AppOptions extends NestApplicationOptions {
  entry: Type<unknown>;
  cors?: boolean;
  origin?: boolean | RegExp[] | string | string[];
  production: boolean;
}

export const appFactory = async <T extends NestExpressApplication>(
  options: AppOptions
) => {
  const { entry, production, origin, ...config } = options;
  const app = await NestFactory.create<T>(entry, config);

  let prefix = '';

  if (production) {
    app.enableCors({ origin });
  } else {
    prefix = 'api';
    app.setGlobalPrefix(prefix);
  }

  return { app, prefix };
};
