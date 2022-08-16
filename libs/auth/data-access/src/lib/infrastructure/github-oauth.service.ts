import { Http } from '@confs/shared/data-access';

export interface GithubOAuthOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope?: string;
}

export class GithubOAuthService extends Http {
  constructor(private readonly _options: GithubOAuthOptions) {
    super();
  }

  getAccessToken(code: string) {
    const data = {
      code,
      scope: this._options.scope,
      client_id: this._options.clientId,
      client_secret: this._options.clientSecret,
      redirect_uri: this._options.redirectUri,
    };
    return this.post('https://github.com/login/oauth/access_token', data);
  }

  getUserInfo(accessToken: string) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.get('https://api.github.com/user', headers);
  }
}
