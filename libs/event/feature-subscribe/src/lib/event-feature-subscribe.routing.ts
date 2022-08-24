import { RouterModule } from '@angular/router';

import { SubscribeShellComponent } from './containers';
import { HomeComponent } from './pages';
import { UserGuard } from './guards';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: SubscribeShellComponent,
    canActivateChild: [UserGuard],
    children: [
      {
        path: ':user',
        component: HomeComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
]);
