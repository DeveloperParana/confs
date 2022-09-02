import { RouterModule } from '@angular/router';
import { EventSpeakersComponent } from './containers';

export const EventFeatureSpeakerRouting = RouterModule.forChild([
  {
    path: '',
    component: EventSpeakersComponent,
  },
]);
