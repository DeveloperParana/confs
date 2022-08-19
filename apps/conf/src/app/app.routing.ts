import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@confs/event/feature-subscribe').then(
        (module) => module.EventFeatureSubscribeModule
      ),
  },
];

const extras: ExtraOptions = { initialNavigation: 'enabledBlocking', useHash: true };

export const AppRouting = RouterModule.forRoot(routes, extras);
