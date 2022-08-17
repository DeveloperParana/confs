import { RouterModule } from '@angular/router';

import { OAuthResolver, TicketResolver } from './resolvers';
import { SubscribeShellComponent } from './containers';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: SubscribeShellComponent,
  },
  {
    path: ':username',
    component: SubscribeShellComponent,
    resolve: {
      ticketUser: TicketResolver,
    },
  },
  {
    path: 'oauth/callback',
    component: SubscribeShellComponent,
    resolve: {
      githubOAuthCode: OAuthResolver,
    },
  },
]);
