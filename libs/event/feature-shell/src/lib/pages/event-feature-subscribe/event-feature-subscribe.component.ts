import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import { OAuthFacade } from '@confs/auth/data-access';
import { SubscribeFacade } from '@confs/shared/data-access';

@Component({
  templateUrl: './event-feature-subscribe.component.html',
  styleUrls: ['./event-feature-subscribe.component.scss'],
})
export class EventFeatureSubscribeComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  date

  placeholder = {
    email: 'Ex.: seu.nome@gmail.com',
    acompanhe: 'Entre com seu e-mail',
  };

  constructor(
    @Inject('event.date') readonly eventDate: string,
    readonly subscribeFacade: SubscribeFacade,
    readonly oAuthFacade: OAuthFacade,
  ) {
    this.date = new Date(eventDate)
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
      this.form.controls.email.reset();
    } else {
      this.form.markAllAsTouched();
      if (input) input.focus();
    }
  }
}
