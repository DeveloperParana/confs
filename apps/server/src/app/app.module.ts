import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { OAuthModule } from './oauth/oauth.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { DatabaseModule } from './database/database.module';
import { WebpProvider } from './utilities/webp.provider';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    HttpModule,
    OAuthModule,
    ProjectModule,
    SubscribeModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, WebpProvider],
})
export class AppModule {}
