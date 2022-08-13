import { SectionsModule } from './sections/sections.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RouteRoutes } from './app.routing';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: SubscriptionComponent },
        { path: ':id', component: SubscriptionComponent },
      ],
      {
        initialNavigation: 'enabledBlocking',
      }
    ),
    PagesModule,
    SectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
