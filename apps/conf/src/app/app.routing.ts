import { Routes, ExtraOptions, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@confs/event/feature-shell').then(
        (module) => module.EventFeatureShellModule
      ),
  },
  {
    path: 'conf',
    loadChildren: () =>
      import('@confs/event/feature-shell').then(
        (module) => module.EventFeatureShellModule
      ),
  },
  {
    path: '',
    redirectTo: 'conf',
    pathMatch: 'full',
  },
];

const extras: ExtraOptions = {
  initialNavigation: 'enabledNonBlocking',
  // enableTracing: !environment.production,
  scrollPositionRestoration: 'enabled',
  useHash: true,
};

export const AppRouting = RouterModule.forRoot(routes, extras);
