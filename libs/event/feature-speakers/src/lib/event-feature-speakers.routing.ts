import { RouterModule } from '@angular/router';
import { EventFeatureSpeakersComponent } from './event-feature-speakers.component';

export const EventFeatureSpeakersRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureSpeakersComponent,
  },
]);
