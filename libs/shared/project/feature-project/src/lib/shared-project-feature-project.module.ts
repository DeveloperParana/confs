import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiPipesModule } from '@confs/shared/ui-pipes';

import { ProjectComponent } from './containers';
import {
  ProjectColumnComponent,
  ProjectColumnCardComponent,
} from './components';

@NgModule({
  imports: [CommonModule, SharedUiPipesModule],
  declarations: [
    ProjectComponent,
    ProjectColumnComponent,
    ProjectColumnCardComponent,
  ],
  exports: [
    ProjectComponent,
    ProjectColumnComponent,
    ProjectColumnCardComponent,
  ],
})
export class SharedProjectFeatureProjectModule {}
