import { tap } from 'rxjs';

import {
  GithubUser,
  AccessToken,
  AuthorizeParams,
  GithubOAuthOptions,
  GithubAccessTokenResponse,
} from '@confs/auth/api-interfaces';
import { Http } from '@confs/shared/data-access';
import { normalizeKeys, toTitleCase } from '@confs/shared/util-format';

class OAuthStorage {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }
}

export class OAuthService extends Http {
  storage = new OAuthStorage(localStorage);

  constructor(private readonly options: GithubOAuthOptions) {
    super();
  }

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
    const { clientId, redirectUri, scope } = this.options;

    const url = '/api/oauth/access-token';
    const data = { clientId, redirectUri, scope, code };

    return this.post<GithubAccessTokenResponse, AccessToken>(url, data).pipe(
      tap(this.setAccessTokenToStorage('token'))
    );
  }

  getUserInfo(response: GithubAccessTokenResponse) {
    const prefix = toTitleCase(response.token_type);
    const headers = { Authorization: `${prefix} ${response.access_token}` };
    return this.get<GithubUser>('https://api.github.com/user', headers);
  }

  setAccessTokenToStorage(key: string) {
    return <T extends GithubAccessTokenResponse>(accessToken: T) => {
      this.storage.set(key, JSON.stringify({ accessToken }));
    };
  }

  getAccessTokenFromStorage(): GithubAccessTokenResponse {
    const token = this.storage.get('token');
    return token ? JSON.parse(token) : null;
  }
}
