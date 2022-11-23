import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventUiCountdownModule } from '@confs/event/ui-countdown';
import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import { EventFeatureC4pComponent, EventFeaturePageComponent } from './pages';
import {
  EventFeatureShellHeaderComponent,
  EventFeatureShellFooterComponent,
} from './components';

@NgModule({
  declarations: [
    EventFeatureC4pComponent,
    EventFeaturePageComponent,
    EventFeatureShellComponent,
    EventFeatureShellHeaderComponent,
    EventFeatureShellFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedUiPipesModule,
    EventUiCountdownModule,
    EventFeatureShellRouting,
  ],
})
export class EventFeatureShellModule {}
