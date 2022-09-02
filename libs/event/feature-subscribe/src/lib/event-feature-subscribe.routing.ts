import { RouterModule } from '@angular/router';

import { OAuthResolver } from './resolvers';
import { HomeComponent } from './pages';
import { UserGuard } from './guards';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      githubOAuthCode: OAuthResolver,
    },
    canActivate: [UserGuard],
  },
]);
