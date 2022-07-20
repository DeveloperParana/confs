import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TicketComponent } from './ticket/ticket.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    TicketComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, BannerComponent, TicketComponent, FooterComponent],
})
export class SectionsModule {}
