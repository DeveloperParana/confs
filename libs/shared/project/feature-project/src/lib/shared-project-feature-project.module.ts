import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './containers';
import { HtmlPipe } from './pipes/html.pipe';
import {
  ProjectColumnComponent,
  ProjectColumnCardComponent,
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HtmlPipe,
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
