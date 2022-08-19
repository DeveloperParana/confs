import { RouterModule } from '@angular/router';

import { SubscribeShellComponent } from './containers';
import { OAuthResolver } from './resolvers';
import { HomeComponent } from './pages';
import { UserGuard } from './guards';

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
      },
      {
        path: ':username',
        component: HomeComponent,
        canActivate: [UserGuard],
      },
    ],
  },
]);
