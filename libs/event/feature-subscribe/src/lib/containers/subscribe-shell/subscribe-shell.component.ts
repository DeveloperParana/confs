import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { SubscribeFacade } from '@confs/event/data-state';
import { AuthFacade } from '@confs/auth/data-state';

import '@confs/event/ui-ticket';

@Component({
  templateUrl: './subscribe-shell.component.html',
  styleUrls: ['./subscribe-shell.component.scss'],
})
export class SubscribeShellComponent {
  date = new Date('05/11/2022').toLocaleDateString();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  user = {
    id: '5638096',
    login: 'guiseek',
    name: 'Guilherme Siquinelli',
    avatar: 'https://avatars.githubusercontent.com/u/5638096?v=4',
  };

  constructor(
    readonly subscribeFacade: SubscribeFacade,
    readonly authFacade: AuthFacade // readonly ticketFacade: TicketFacade
  ) {
    this.authFacade.loadAuthorizeParams();
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
