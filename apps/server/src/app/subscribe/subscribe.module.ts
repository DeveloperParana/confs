import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { SubscribeController } from './subscribe.controller';
import { subscribeProviders } from './subscribe.providers';
import { SubscribeService } from './subscribe.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, ...subscribeProviders],
})
export class SubscribeModule {}
