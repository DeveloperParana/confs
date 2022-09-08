import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';

import { EventFeatureSpeakersRouting } from './event-feature-speakers.routing';
import { EventFeatureSpeakersComponent } from './event-feature-speakers.component';

@NgModule({
  declarations: [EventFeatureSpeakersComponent],
  imports: [
    CommonModule,
    SharedProjectUiProjectModule,
    EventFeatureSpeakersRouting,
  ],
})
export class EventFeatureSpeakersModule {}
