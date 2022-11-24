import { Component, OnInit } from '@angular/core';
import { OAuthFacade } from '@confs/auth/data-access';

import { SubscribeFacade } from '@confs/shared/data-access';

import { SubscribeForm } from './forms';

@Component({
  templateUrl: './event-feature-subscribe.component.html',
  styleUrls: ['./event-feature-subscribe.component.scss'],
})
export class EventFeatureSubscribeComponent implements OnInit {
  form = new SubscribeForm();

  placeholder = {
    email: 'Ex.: seu.nome@gmail.com',
    acompanhe: 'Entre com seu e-mail',
  };

  constructor(
    readonly subscribeFacade: SubscribeFacade,
    readonly oAuthFacade: OAuthFacade
  ) {}

  ngOnInit() {
    this.oAuthFacade.loadAuthorizeParams();
  }

  changeFocus(input: HTMLInputElement) {
    if (input.placeholder === this.placeholder.email) {
      input.placeholder = this.placeholder.acompanhe;
    } else {
      input.placeholder = this.placeholder.email;
    }
  }

  onSubmit(input?: HTMLInputElement) {
    const { email = '' } = this.form.value;

    if (this.form.valid && email) {
      this.subscribeFacade.subscribe({ email });
    } else {
      this.form.markAllAsTouched();
      if (input) input.focus();
    }
  }
}
