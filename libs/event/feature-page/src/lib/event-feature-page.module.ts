import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFeaturePageComponent } from './event-feature-page.component';
import { EventFeaturePageRouting } from './event-feature-page.routing';
import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';

@NgModule({
  declarations: [EventFeaturePageComponent],
  imports: [
    CommonModule,
    SharedProjectUiProjectModule,
    EventFeaturePageRouting,
  ],
})
export class EventFeaturePageModule {}
