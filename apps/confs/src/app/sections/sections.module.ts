import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../shared/auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AuthModule],
  exports: [HeaderComponent, BannerComponent, FooterComponent],
})
export class SectionsModule {}
