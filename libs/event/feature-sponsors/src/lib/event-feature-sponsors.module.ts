import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';

import { EventFeatureSponsorsComponent } from './event-feature-sponsors.component';
import { EventFeatureSponsorsRouting } from './event-feature-sponsors.routing';

@NgModule({
  declarations: [EventFeatureSponsorsComponent],
  imports: [
    CommonModule,
    SharedProjectUiProjectModule,
    EventFeatureSponsorsRouting,
  ],
})
export class EventFeatureSponsorsModule {}
