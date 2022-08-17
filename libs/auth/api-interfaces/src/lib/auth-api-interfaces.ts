export function authApiInterfaces(): string {
  return 'auth-api-interfaces';
}

export interface GithubOAuthOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope?: string;
}

export interface GithubOAuthParams {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scope?: string;
}

export interface GithubAuthorizeParams {
  client_id: string;
  redirect_uri: string;
  login?: string;
  scope?: string;
  state: string;
}

export interface GithubAccessTokenPayload {
  code: string;
  scope?: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
}
export interface GithubAccessTokenResponse {
  accessToken: string;
}
