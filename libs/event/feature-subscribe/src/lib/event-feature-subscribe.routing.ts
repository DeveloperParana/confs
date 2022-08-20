import { RouterModule } from '@angular/router';

import { SubscribeShellComponent } from './containers';
import { HomeComponent } from './pages';
import { UserGuard } from './guards';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: SubscribeShellComponent,
    children: [
      {
        path: ':username',
        component: HomeComponent,
        canActivate: [UserGuard],
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [UserGuard],
      },
    ],
  },
]);
