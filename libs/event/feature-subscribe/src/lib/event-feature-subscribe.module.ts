import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventFeatureSubscribeRouting } from './event-feature-subscribe.routing';
import {
  EventTicketComponent,
  GithubButtonComponent,
  TwitterButtonComponent,
} from './components';
import { SubscribeShellComponent } from './containers';
import { HomeComponent } from './pages';
import { OAuthResolver } from './resolvers';
import { UserGuard } from './guards';

@NgModule({
  declarations: [
    SubscribeShellComponent,
    GithubButtonComponent,
    TwitterButtonComponent,
    EventTicketComponent,
    HomeComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureSubscribeRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserGuard, OAuthResolver],
})
export class EventFeatureSubscribeModule {}
