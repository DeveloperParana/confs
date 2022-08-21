import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

import {
  AccessToken,
  AccessTokenResponse,
  GithubAccessTokenResponse,
} from '@confs/auth/api-interfaces';
import { normalizeKeys } from '@confs/shared/util-format';
import { extractDataResponse } from '@confs/shared/data-access';

@Injectable()
export class OAuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  getAccessToken(options: AccessToken): Observable<AccessTokenResponse> {
    const secretKey = 'GITHUB_OAUTH_CLIENT_SECRET';
    const clientSecret = this.configService.get(secretKey);

    const parameters = {
      code: options.code,
      scope: options.scope,
      client_id: options.clientId,
      redirect_uri: options.redirectUri,
      client_secret: clientSecret,
    };

    console.log(clientSecret, parameters);


    const headers = { Accept: 'application/json' };

    const url = 'https://github.com/login/oauth/access_token';

    return this.httpService
      .post<GithubAccessTokenResponse>(url, parameters, { headers })
      .pipe(
        map(extractDataResponse),
        map((response) => normalizeKeys(response))
      );
  }
}
