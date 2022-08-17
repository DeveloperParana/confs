import { Component } from '@angular/core';
import { AuthFacade } from '@confs/auth/data-state';

import '@confs/event/ui-ticket';

@Component({
  templateUrl: './subscribe-shell.component.html',
  styleUrls: ['./subscribe-shell.component.scss'],
})
export class SubscribeShellComponent {
  date = new Date('05/11/2022').toLocaleDateString();

  user = {
    id: '5638096',
    login: 'guiseek',
    name: 'Guilherme Siquinelli',
    avatar: 'https://avatars.githubusercontent.com/u/5638096?v=4',
  };

  constructor(
    readonly authFacade: AuthFacade // readonly ticketFacade: TicketFacade
  ) {
    this.authFacade.loadAuthorizeParams();
  }
}
