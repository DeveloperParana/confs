export interface GithubAccessToken {
  code: string;
  scope?: string;
  client_id: string;
  redirect_uri: string;
}

export interface GithubAccessTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
}
