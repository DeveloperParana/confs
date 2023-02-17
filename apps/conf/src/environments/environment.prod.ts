export const environment = {
  production: true,
  'server.api': 'https://api.devpr.org',
  'event.date': '03/11/2023 08:00:00',
  pages: {
    project: 14615934,
    starter: 19346279,
    equipe: 19360587,
    palestras: 19145242,
    patrocinadores: 19145633,
  },
  'github.oauth.options': {
    clientId: 'ff9e2e06e97c2a9411cc',
    redirectUri: 'https://devpr.org',
    scope: 'read:user', // <== muito importante que permaneça read:user apenas
  },
};
