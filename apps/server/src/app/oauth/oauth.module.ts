import {Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {OAuthController} from './oauth.controller';
import {OAuthService} from './oauth.service';

@Module({
  imports: [HttpModule],
  controllers: [OAuthController],
  providers: [OAuthService],
})
export class OAuthModule {}
