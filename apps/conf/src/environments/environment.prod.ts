export const environment = {
  production: true,
  'server.api': 'https://api.devpr.org',
  'github.oauth.options': {
    clientId: 'ff9e2e06e97c2a9411cc',
    redirectUri: 'https://devpr.org',
    scope: 'read:user', // <== muito importante que permaneça read:user apenas
  },
};
