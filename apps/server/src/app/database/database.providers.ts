import {ConfigService} from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'database.connection',
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
      const username = configService.get('MONGO_DB_ATLAS_USERNAME');
      const password = configService.get('MONGO_DB_ATLAS_PASSWORD');
      const cluster = configService.get('MONGO_DB_ATLAS_CLUSTER');

      return mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`
      );
    },
    inject: [ConfigService],
  },
];
