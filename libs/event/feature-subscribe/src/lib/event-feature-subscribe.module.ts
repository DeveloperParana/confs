import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventFeatureSubscribeRouting } from './event-feature-subscribe.routing';
import { GithubButtonComponent, TwitterButtonComponent } from './components';
import { SubscribeShellComponent } from './containers';
import { HomeComponent } from './pages/home/home.component';
import { OAuthResolver } from './resolvers';

@NgModule({
  declarations: [
    SubscribeShellComponent,
    GithubButtonComponent,
    TwitterButtonComponent,
    HomeComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureSubscribeRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OAuthResolver]
})
export class EventFeatureSubscribeModule {}
