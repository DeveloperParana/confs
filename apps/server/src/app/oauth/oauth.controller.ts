import { AccessToken } from '@confs/auth/api-interfaces';
import { Body, Controller, Post } from '@nestjs/common';
import { OAuthService } from './oauth.service';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthService) {}

  @Post('access-token')
  accessToken(@Body() body: AccessToken) {
    return this.oauthService.getAccessToken(body);
  }
}
