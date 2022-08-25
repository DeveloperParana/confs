import { Logger } from '@nestjs/common';

import { environment } from './environments/environment';
import { appFactory } from './app/app.factory';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const { production } = environment;
  const config = {
    cors: true,
    production,
    entry: AppModule,
    origin: '*',
  };

  const { app, prefix } = await appFactory(config);

  // app.useStaticAssets(join(__dirname, 'assets'));
  // app.setBaseViewsDir(join(__dirname, 'views'));
  // app.setViewEngine('hbs');

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}

bootstrap();
