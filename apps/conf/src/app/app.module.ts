import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthResolver } from '@confs/event/feature-subscribe';

import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.providers';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting],
  providers: [...APP_PROVIDERS, OAuthResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
