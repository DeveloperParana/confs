import {
  AuthorizeParams,
  AccessToken,
  GithubOAuthOptions,
  AccessTokenResponse,
} from '@confs/auth/api-interfaces';
import { Http } from '@confs/shared/data-access';
import { map } from 'rxjs';

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

  constructor(private readonly _options: GithubOAuthOptions) {
    super();
  }

  getParamsFromOptions(
    login?: string,
    scope?: string
  ): Required<AuthorizeParams> {
    return {
      client_id: this._options.clientId,
      redirect_uri: this._options.redirectUri,
      scope: scope ?? this._options.scope ?? '',
      state: Math.random().toString(36),
      login: login ?? '',
    };
  }

  getAccessToken(code: string) {
    const { clientId, redirectUri, scope } = this._options;

    return this.post<AccessTokenResponse, AccessToken>(
      '/api/oauth/access-token',
      { clientId, redirectUri, scope, code }
    ).pipe(
      map((response) => {
        const { accessToken } = response;
        console.log(accessToken);
        this.storage.set('accessToken', accessToken);
        return response;
      })
    );
  }

  getUserInfo(accessToken: string) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.get('https://api.github.com/user', headers);
  }
}
