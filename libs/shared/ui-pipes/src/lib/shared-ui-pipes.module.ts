import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SafeUrlPipe, MdToHtmlPipe],
  exports: [SafeUrlPipe, MdToHtmlPipe],
})
export class SharedUiPipesModule {}
