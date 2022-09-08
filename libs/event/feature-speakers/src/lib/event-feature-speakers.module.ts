import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiProjectModule } from '@confs/shared/ui-project';

import { EventFeatureSpeakersRouting } from './event-feature-speakers.routing';
import { EventFeatureSpeakersComponent } from './event-feature-speakers.component';

@NgModule({
  declarations: [EventFeatureSpeakersComponent],
  imports: [CommonModule, SharedUiProjectModule, EventFeatureSpeakersRouting],
})
export class EventFeatureSpeakersModule {}
