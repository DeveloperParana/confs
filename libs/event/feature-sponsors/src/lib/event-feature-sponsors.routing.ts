import { RouterModule } from '@angular/router';
import { EventFeatureSponsorsComponent } from './event-feature-sponsors.component';

export const EventFeatureSponsorsRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureSponsorsComponent,
  }
]);
