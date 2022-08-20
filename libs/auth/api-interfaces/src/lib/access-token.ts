export interface AuthorizeParams {
  client_id: string;
  redirect_uri: string;
  login?: string;
  scope?: string;
  state: string;
}

export interface AccessToken {
  code: string;
  scope?: string;
  clientId: string;
  redirectUri: string;
}

export interface AccessTokenResponse {
  accessToken: string;
  tokenType: string;
  scope: string;
}
