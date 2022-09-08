export const environment = {
  production: true,
  'server.api': 'https://api.devpr.org',
  'event.date': '11/03/2023',
  projects: {
    speakers: {
      label: 'Palestras',
      path: 'palestras',
      projectId: 14622472,
      columnId: 19160174,
    },
    sponsors: {
      label: 'Palestras',
      path: 'palestras',
      projectId: 14622473,
      columnId: 19160223,
    },
  },
  pages: {
    project: 14615934,
    palestras: 19145242,
    patrocinadores: 19145633,
  },
  'github.oauth.options': {
    clientId: 'ff9e2e06e97c2a9411cc',
    redirectUri: 'https://devpr.org',
    scope: 'read:user', // <== muito importante que permaneça read:user apenas
  },
};
