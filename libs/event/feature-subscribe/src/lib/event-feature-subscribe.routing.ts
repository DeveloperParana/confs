import { RouterModule } from '@angular/router';

import { SubscribeShellComponent } from './containers';
import { OAuthResolver } from './resolvers';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: SubscribeShellComponent,
  },
  {
    path: ':username',
    component: SubscribeShellComponent,
  },
  {
    path: 'oauth/callback',
    component: SubscribeShellComponent,
    resolve: {
      githubOAuthCode: OAuthResolver,
    },
  },
]);
