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
        title: 'Acompanhe - DevParaná Conf 2023',
      },
      {
        path: 'palestras',
        loadChildren: () =>
          import('@confs/event/feature-speakers').then(
            (m) => m.EventFeatureSpeakersModule
          ),
        title: 'Palestras - DevParaná Conf 2023',
      },
      {
        path: 'patrocinios',
        loadChildren: () =>
          import('@confs/event/feature-sponsors').then(
            (m) => m.EventFeatureSponsorsModule
          ),
        title: 'Patrocínios - DevParaná Conf 2023',
      },
    ],
  },
]);
