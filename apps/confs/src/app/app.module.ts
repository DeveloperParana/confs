import { SectionsModule } from './sections/sections.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    PagesModule,
    SectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
