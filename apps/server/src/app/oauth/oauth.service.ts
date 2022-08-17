import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

import { AccessToken } from '@confs/auth/api-interfaces';

const extractDataResponse = <T>({ data }: AxiosResponse<T>) => data;

@Injectable()
export class OAuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  getAccessToken(options: AccessToken) {
    const secretKey = 'GITHUB_OAUTH_CLIENT_SECRET';
    const clientSecret = this.configService.get(secretKey);

    const parameters = {
      code: options.code,
      scope: options.scope,
      client_id: options.clientId,
      redirect_uri: options.redirectUri,
      client_secret: clientSecret,
    };

    const headers = { Accept: 'application/json' };

    const url = 'https://github.com/login/oauth/access_token';

    return this.httpService
      .post(url, parameters, { headers })
      .pipe(map(extractDataResponse));
  }
}
