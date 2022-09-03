import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { ProjectColumnCardComponent } from './project-column-card/project-column-card.component';
import { ProjectColumnsComponent } from './project-columns/project-columns.component';
import { ProjectColumnComponent } from './project-column/project-column.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiPipesModule],
  declarations: [
    ProjectColumnComponent,
    ProjectColumnsComponent,
    ProjectColumnCardComponent,
  ],
  exports: [
    ProjectColumnComponent,
    ProjectColumnsComponent,
    ProjectColumnCardComponent,
  ],
})
export class SharedProjectUiProjectModule {}
