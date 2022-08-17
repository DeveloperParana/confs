import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventFeatureSubscribeRouting } from './event-feature-subscribe.routing';
import { GithubButtonComponent, TwitterButtonComponent } from './components';
import { SubscribeShellComponent } from './containers';

@NgModule({
  declarations: [
    SubscribeShellComponent,
    GithubButtonComponent,
    TwitterButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EventFeatureSubscribeRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventFeatureSubscribeModule {}
