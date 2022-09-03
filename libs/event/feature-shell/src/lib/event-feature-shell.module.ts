import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';
import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';

@NgModule({
  declarations: [EventFeatureShellComponent],
  imports: [
    CommonModule,
    SharedUiPipesModule,
    SharedProjectUiProjectModule,
    EventFeatureShellRouting,
  ],
})
export class EventFeatureShellModule {}
