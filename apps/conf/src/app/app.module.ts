import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.providers';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRouting,
  ],
  providers: [...APP_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
