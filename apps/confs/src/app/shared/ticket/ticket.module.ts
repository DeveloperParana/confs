import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';

@NgModule({
  declarations: [TicketComponent],
  exports: [TicketComponent],
  imports: [CommonModule],
})
export class TicketModule {}
