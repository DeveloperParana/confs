import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { ProjectColumnCardComponent } from './project-column-card/project-column-card.component';
import { ProjectColumnComponent } from './project-column/project-column.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiPipesModule],
  declarations: [
    ProjectColumnComponent,
    ProjectColumnCardComponent,
  ],
  exports: [
    ProjectColumnComponent,
    ProjectColumnCardComponent,
  ],
})
export class SharedProjectUiProjectModule {}
