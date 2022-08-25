import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { AccessTokenResponse } from '@confs/auth/api-interfaces';
import { TicketFacade } from '@confs/event/data-state';

@Injectable()
export class OAuthResolver implements Resolve<AccessTokenResponse | boolean> {
  constructor(private ticketFacade: TicketFacade, private router: Router) {}

  resolve() {
    // const code = route.queryParamMap.get('code');
    const url = new URL(location.href);
    const code = url.searchParams.get('code');

    if (code) {
      const user$ = this.ticketFacade.user$;

      const $user = user$.subscribe((user) => {
        if (user) {
          this.router.navigate(['/'], { queryParams: { user: user.login } });
          $user.unsubscribe();
        }
      });

      this.ticketFacade.loadGithubAuthentication(code);
    }

    return of(true);
  }
}
