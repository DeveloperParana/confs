import { SectionsModule } from './sections/sections.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    SectionsModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
