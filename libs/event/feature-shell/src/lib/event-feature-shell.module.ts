import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import {
  EventFeatureC4pComponent,
  EventFeaturePageComponent,
  EventFeatureTicketComponent,
} from './pages';
import {
  EventFeatureHeaderComponent,
  EventFeatureFooterComponent,
  EventFeatureCounterComponent,
} from './components';

@NgModule({
  declarations: [
    EventFeatureC4pComponent,
    EventFeaturePageComponent,
    EventFeatureShellComponent,
    EventFeatureHeaderComponent,
    EventFeatureFooterComponent,
    EventFeatureTicketComponent,
    EventFeatureCounterComponent,
  ],
  imports: [
    CommonModule,
    SharedUiPipesModule,
    EventFeatureShellRouting,
  ],
})
export class EventFeatureShellModule {}
