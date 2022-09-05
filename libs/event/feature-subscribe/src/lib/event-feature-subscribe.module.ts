import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventFeatureSubscribeRouting } from './event-feature-subscribe.routing';
import { EventFeatureSubscribeComponent } from './event-feature-subscribe.component';
import {
  EventTicketComponent,
  GithubButtonComponent,
  TwitterButtonComponent,
} from './components';
import { OAuthResolver } from './resolvers';
import { UserGuard } from './guards';

@NgModule({
  declarations: [
    TwitterButtonComponent,
    GithubButtonComponent,
    EventTicketComponent,
    EventFeatureSubscribeComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureSubscribeRouting],
  providers: [UserGuard, OAuthResolver],
})
export class EventFeatureSubscribeModule {}
