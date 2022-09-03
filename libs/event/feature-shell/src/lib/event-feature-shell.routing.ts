import { RouterModule } from '@angular/router';
import { EventFeatureShellComponent } from './event-feature-shell.component';

export const EventFeatureShellRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureShellComponent,
    title: 'DevParaná Conf 2023',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@confs/event/feature-subscribe').then(
            (m) => m.EventFeatureSubscribeModule
          ),
        title: 'Fique ligado - DevParaná Conf 2023',
      },
      {
        path: 'page',
        loadChildren: () =>
          import('@confs/event/feature-page').then(
            (m) => m.EventFeaturePageModule
          ),
        title: 'Página - DevParaná Conf 2023',
      }
    ],
  },
]);
