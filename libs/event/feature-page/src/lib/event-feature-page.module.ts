import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFeaturePageComponent } from './event-feature-page.component';
import { EventFeaturePageRouting } from './event-feature-page.routing';
import { SharedProjectFeatureProjectModule } from '@confs/shared/project/feature-project';

@NgModule({
  declarations: [EventFeaturePageComponent],
  imports: [
    CommonModule,
    SharedProjectFeatureProjectModule,
    EventFeaturePageRouting,
  ],
})
export class EventFeaturePageModule {}
