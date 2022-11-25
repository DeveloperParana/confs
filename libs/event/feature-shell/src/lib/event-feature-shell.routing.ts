import { RouterModule } from '@angular/router';
import { OAuthGuard, OAuthResolver } from '@confs/auth/data-access';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import {
  EventFeaturePageResolver,
  EventFeatureC4pComponent,
  EventFeaturePageComponent,
  EventFeatureSubscribeComponent,
} from './pages';

export const EventFeatureShellRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureShellComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: EventFeatureSubscribeComponent,
        resolve: {
          githubOAuthCode: OAuthResolver,
        },
        canActivate: [OAuthGuard],
        // title: 'Fique ligado - DevPR Conf 2023',
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
        },
      },
    ],
  },
]);
