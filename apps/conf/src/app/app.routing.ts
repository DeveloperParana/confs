import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { OAuthResolver } from '@confs/event/feature-subscribe';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@confs/event/feature-subscribe').then(
        (module) => module.EventFeatureSubscribeModule
      ),
    resolve: {
      githubOAuthCode: OAuthResolver
    },
  },
];

const extras: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  useHash: true,
};

export const AppRouting = RouterModule.forRoot(routes, extras);
