import {
  GithubOAuthOptions,
  GithubAuthorizeParams,
  GithubAccessTokenPayload,
  GithubAccessTokenResponse,
} from '@confs/auth/api-interfaces';
import { Http } from '@confs/shared/data-access';

export class GithubOAuthService extends Http {
  constructor(private readonly _options: GithubOAuthOptions) {
    super();
  }

  getParamsFromOptions(
    login?: string,
    scope?: string
  ): Required<GithubAuthorizeParams> {
    return {
      client_id: this._options.clientId,
      redirect_uri: this._options.redirectUri,
      scope: scope ?? this._options.scope ?? '',
      state: Math.random().toString(36),
      login: login ?? '',
    };
  }

  getAccessToken(code: string) {
    const githubAccessTokenPayload = {
      code,
      scope: this._options.scope,
      client_id: this._options.clientId,
      client_secret: this._options.clientSecret,
      redirect_uri: this._options.redirectUri,
    };

    return this.post<GithubAccessTokenResponse, GithubAccessTokenPayload>(
      'https://github.com/login/oauth/access_token',
      githubAccessTokenPayload
    );
  }

  getUserInfo(accessToken: string) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.get('https://api.github.com/user', headers);
  }
}
