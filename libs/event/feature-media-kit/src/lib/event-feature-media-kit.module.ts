import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFeatureMediaKitComponent } from './event-feature-media-kit.component';

@NgModule({
  declarations: [EventFeatureMediaKitComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EventFeatureMediaKitComponent
      }
    ]),
  ],
})
export class EventFeatureMediaKitModule {}
