import {Connection} from 'mongoose';
import {SubscribeSchema} from './schemas/subscribe.schema';

export const subscribeProviders = [
  {
    provide: 'subscribe.model',
    useFactory: (connection: Connection) =>
      connection.model('Subscribe', SubscribeSchema),
    inject: ['database.connection'],
  },
];
