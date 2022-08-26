import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@confs/event/feature-subscribe').then(
        (module) => module.EventFeatureSubscribeModule
      ),
  },
  {
    path: 'media-kit',
    loadChildren: () =>
      import('@confs/event/feature-media-kit').then(
        (module) => module.EventFeatureMediaKitModule
      ),
  },
];

const extras: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
};

export const AppRouting = RouterModule.forRoot(routes, extras);
