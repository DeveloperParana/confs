import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiProjectModule } from '@confs/shared/ui-project';

import { EventFeatureSponsorsComponent } from './event-feature-sponsors.component';
import { EventFeatureSponsorsRouting } from './event-feature-sponsors.routing';

@NgModule({
  declarations: [EventFeatureSponsorsComponent],
  imports: [CommonModule, SharedUiProjectModule, EventFeatureSponsorsRouting],
})
export class EventFeatureSponsorsModule {}
