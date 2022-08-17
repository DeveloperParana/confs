import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventFeatureSubscribeRouting } from './event-feature-subscribe.routing';
import { SubscribeShellComponent } from './containers';
import {
  SubscribeFormComponent,
  GithubButtonComponent,
  TwitterButtonComponent,
} from './components';

@NgModule({
  declarations: [
    SubscribeFormComponent,
    SubscribeShellComponent,
    GithubButtonComponent,
    TwitterButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureSubscribeRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventFeatureSubscribeModule {}
