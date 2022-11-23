import { RouterModule } from '@angular/router';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import {
  EventFeatureC4pComponent,
  EventFeaturePageComponent,
  EventFeaturePageResolver,
} from './pages';

export const EventFeatureShellRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureShellComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@confs/event/feature-subscribe').then(
            (m) => m.EventFeatureSubscribeModule
          ),
        title: 'Fique ligado - DevPR Conf 2023',
      },
      {
        path: 'c4p',
        component: EventFeatureC4pComponent,
        title: 'C4P - DevPR Conf 2023',
      },
      {
        path: ':column',
        component: EventFeaturePageComponent,
        resolve: {
          column: EventFeaturePageResolver,
        }
      },
    ],
  },
]);
