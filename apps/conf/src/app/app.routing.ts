import { Routes, ExtraOptions, RouterModule } from '@angular/router';

const routes: Routes = [
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
  useHash: true,
};

export const AppRouting = RouterModule.forRoot(routes, extras);
