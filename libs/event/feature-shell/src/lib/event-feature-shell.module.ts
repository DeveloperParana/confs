import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import { SafeUrlPipe } from './pipes/safe-url';

@NgModule({
  declarations: [EventFeatureShellComponent, SafeUrlPipe],
  imports: [CommonModule, EventFeatureShellRouting],
})
export class EventFeatureShellModule {}
