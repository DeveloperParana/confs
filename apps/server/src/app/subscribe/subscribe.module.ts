import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';

@Module({
  controllers: [SubscribeController],
  providers: [SubscribeService],
})
export class SubscribeModule {}
