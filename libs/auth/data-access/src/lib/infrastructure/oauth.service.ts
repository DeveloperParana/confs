import { tap } from 'rxjs';

import {
  GithubUser,
  AccessToken,
  AuthorizeParams,
  AccessTokenResponse,
  OAuthClientParameters,
} from '@confs/auth/api-interfaces';
import { Http } from '@confs/shared/data-access';
import { toTitleCase } from '@confs/shared/util-format';

import { OAuthStorage } from './oauth.storage';

export class OAuthService {
  storage = new OAuthStorage<AccessTokenResponse>(localStorage);

  constructor(
    private readonly http: Http,
    private readonly options: OAuthClientParameters,
    private readonly url: string
  ) {}

  getParamsFromOptions(
    login?: string,
    scope?: string
  ): Required<AuthorizeParams> {
    return {
      client_id: this.options.clientId,
      redirect_uri: this.options.redirectUri,
      scope: scope ?? this.options.scope ?? '',
      state: Math.random().toString(36),
      login: login ?? '',
    };
  }

  getAccessToken(code: string) {
    const url = `${this.url}/oauth/access-token`;
    const data = { ...this.options, code };

    return this.http
      .post<AccessTokenResponse, AccessToken>(url, data)
      .pipe(tap(this.setAccessTokenToStorage('accessToken')));
  }

  getUserInfo(response: AccessTokenResponse) {
    const prefix = toTitleCase(response.tokenType);
    const headers = { Authorization: `${prefix} ${response.accessToken}` };
    return this.http.get<GithubUser>('https://api.github.com/user', headers);
  }

  setAccessTokenToStorage(key: keyof AccessTokenResponse) {
    return <T extends AccessTokenResponse>(accessToken: T) => {
      this.storage.set(key, accessToken[key]);
    };
  }

  getAccessTokenFromStorage(): AccessTokenResponse {
    const token = this.storage.get('accessToken');
    return token ? JSON.parse(token) : null;
  }
}
