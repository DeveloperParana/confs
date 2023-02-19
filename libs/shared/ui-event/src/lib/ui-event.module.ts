import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class UiEventModule {}
