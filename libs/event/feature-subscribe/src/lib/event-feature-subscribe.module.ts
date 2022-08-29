import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  providers: [UserGuard, OAuthResolver],
})
export class EventFeatureSubscribeModule {}
