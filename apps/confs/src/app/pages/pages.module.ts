import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [CommonModule, SectionsModule],
  exports: [SubscriptionComponent],
})
export class PagesModule {}
