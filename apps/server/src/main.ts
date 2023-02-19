import {Logger} from '@nestjs/common';

import {environment} from './environments/environment';
import {appFactory} from './app/app.factory';
import {AppModule as entry} from './app/app.module';

async function bootstrap() {
  const {production, origin} = environment;

  const {app, port, message} = await appFactory({
    entry,
    origin,
    production,
    cors: true,
  });

  await app.listen(port).then(() => Logger.log(message));
}

bootstrap();
