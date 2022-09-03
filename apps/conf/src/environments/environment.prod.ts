export const environment = {
  production: true,
  'server.api': 'https://api.devpr.org',
  'event.date': '11/03/2023',
  'speakers.id': 19145242,
  pages: {
    palestras: 19145242,
    patrocinadores: 19145633,
  },
  'github.oauth.options': {
    clientId: 'ff9e2e06e97c2a9411cc',
    redirectUri: 'https://devpr.org',
    scope: 'read:user', // <== muito importante que permaneça read:user apenas
  },
};
