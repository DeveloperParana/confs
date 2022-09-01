import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedProjectFeatureProjectModule } from '@confs/shared/project/feature-project';

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
    TwitterButtonComponent,
    GithubButtonComponent,
    EventTicketComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedProjectFeatureProjectModule,
    EventFeatureSubscribeRouting,
  ],
  providers: [UserGuard, OAuthResolver],
})
export class EventFeatureSubscribeModule {}
