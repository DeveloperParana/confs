import { Logger } from '@nestjs/common';

import { environment } from './environments/environment';
import { appFactory } from './app/app.factory';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const { production } = environment;

  const config = { production, cors: true, origin: '*', entry: AppModule };
  const { app, port, message } = await appFactory(config);

  app.listen(port).then(() => Logger.log(message));
}

bootstrap();
