import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectFeatureProjectModule } from '@confs/shared/project/feature-project';

import { EventFeatureSpeakerRouting } from './event-feature-speaker.routing';
import { EventSpeakersComponent } from './containers';

@NgModule({
  declarations: [EventSpeakersComponent],
  imports: [
    CommonModule,
    SharedProjectFeatureProjectModule,
    EventFeatureSpeakerRouting,
  ],
})
export class EventFeatureSpeakerModule {}
