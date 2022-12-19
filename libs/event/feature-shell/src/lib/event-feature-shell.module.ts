import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import { MdToHtmlPipe, SafeUrlPipe } from './pipes';
import {
  EventFeatureC4pComponent,
  EventFeaturePageComponent,
  EventFeatureLocalComponent,
  EventFeatureSubscribeComponent,
} from './pages';
import {
  EventFeatureButtonComponent,
  EventFeatureHeaderComponent,
  EventFeatureTicketComponent,
  EventFeatureFooterComponent,
  EventFeatureCounterComponent,
  EventFeatureNavComponent,
  ButtonNavToggleComponent,
} from './components';
import { EventFeatureVideosComponent } from './pages/event-feature-videos/event-feature-videos.component';

@NgModule({
  declarations: [
    SafeUrlPipe,
    MdToHtmlPipe,
    EventFeatureC4pComponent,
    EventFeaturePageComponent,
    EventFeatureShellComponent,
    EventFeatureHeaderComponent,
    EventFeatureButtonComponent,
    EventFeatureFooterComponent,
    EventFeatureTicketComponent,
    EventFeatureCounterComponent,
    EventFeatureSubscribeComponent,
    EventFeatureLocalComponent,
    EventFeatureNavComponent,
    ButtonNavToggleComponent,
    EventFeatureVideosComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureShellRouting],
})
export class EventFeatureShellModule {}
