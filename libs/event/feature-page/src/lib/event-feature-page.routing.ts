import { RouterModule } from '@angular/router';
import { EventFeaturePageComponent } from './event-feature-page.component';

export const EventFeaturePageRouting = RouterModule.forChild([
  {
    path: ':column',
    component: EventFeaturePageComponent,
  },
]);
