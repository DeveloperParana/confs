import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProjectUiProjectModule } from '@confs/shared-project-ui-project';
import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { EventFeatureShellRouting } from './event-feature-shell.routing';
import { EventFeatureShellComponent } from './event-feature-shell.component';
import { EventFeatureShellHeaderComponent } from './components/event-feature-shell-header/event-feature-shell-header.component';
import { EventFeatureShellFooterComponent } from './components/event-feature-shell-footer/event-feature-shell-footer.component';

@NgModule({
  declarations: [
    EventFeatureShellComponent,
    EventFeatureShellHeaderComponent,
    EventFeatureShellFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedUiPipesModule,
    SharedProjectUiProjectModule,
    EventFeatureShellRouting,
  ],
})
export class EventFeatureShellModule {}
