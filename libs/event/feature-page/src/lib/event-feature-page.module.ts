import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';

import { EventFeaturePageComponent } from './event-feature-page.component';
import { EventFeaturePageRouting } from './event-feature-page.routing';

@NgModule({
  declarations: [EventFeaturePageComponent],
  imports: [
    CommonModule,
    SharedProjectUiProjectModule,
    EventFeaturePageRouting,
  ],
})
export class EventFeaturePageModule {}
