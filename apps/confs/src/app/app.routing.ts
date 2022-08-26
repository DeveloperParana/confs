import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubscriptionComponent },
  { path: ':id', component: SubscriptionComponent },
];

export const AppRoutes = RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: true,
});
