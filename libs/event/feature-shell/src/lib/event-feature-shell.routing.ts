import { EventFeatureShellComponent } from './event-feature-shell.component';
import { OAuthGuard, OAuthResolver } from '@confs/auth/data-access';
import { RouterModule } from '@angular/router';
import {
  EventFeaturePageResolver,
  EventFeatureC4pComponent,
  EventFeaturePageComponent,
  EventFeatureSubscribeComponent,
  EventFeatureLocalComponent,
  EventFeatureVideosComponent,
} from './pages';

export const EventFeatureShellRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureShellComponent,
    // pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: EventFeatureSubscribeComponent,
        resolve: {
          githubOAuthCode: OAuthResolver,
        },
        canActivate: [OAuthGuard],
      },
      {
        path: 'c4p',
        component: EventFeatureC4pComponent,
        title: 'C4P - DevPR Conf 2023',
        resolve: {
          column: EventFeaturePageResolver,
        },
      },
      {
        path: 'videos',
        component: EventFeatureVideosComponent,
        title: 'Vídeos - DevPR Conf 2023',
        resolve: {
          column: EventFeaturePageResolver,
        },
      },
      {
        path: 'local',
        component: EventFeatureLocalComponent,
        title: 'Local - DevPR Conf 2023',
        resolve: {
          column: EventFeaturePageResolver,
        },
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
