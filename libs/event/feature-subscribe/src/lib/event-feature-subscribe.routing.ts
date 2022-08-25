import { RouterModule } from '@angular/router';

import { SubscribeShellComponent } from './containers';
import { HomeComponent } from './pages';
import { UserGuard } from './guards';
import { OAuthResolver } from './resolvers';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: SubscribeShellComponent,
    resolve: {
      githubOAuthCode: OAuthResolver,
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [UserGuard],
      },
    ],
  },
]);
