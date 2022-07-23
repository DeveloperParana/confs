import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthModule } from '../shared/auth/auth.module';
import { TicketModule } from '../shared/ticket/ticket.module';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [CommonModule,  SectionsModule, TicketModule],
  exports: [SubscriptionComponent],
})
export class PagesModule {}
