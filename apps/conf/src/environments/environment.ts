// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'event.date': '03/11/2023 08:00:00',
  'server.api': '/api',
  pages: {
    project: 14649051,
    palestras: 19259040,
    patrocinadores: 19259041,
  },
  'github.oauth.options': {
    clientId: 'ff9e2e06e97c2a9411cc',
    redirectUri: 'http://localhost:4200',
    scope: 'read:user', // <== muito importante que permaneça read:user apenas
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
