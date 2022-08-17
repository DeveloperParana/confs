import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { TicketFacade } from '@confs/event/data-state';

@Injectable({
  providedIn: 'root',
})
export class TicketResolver implements Resolve<boolean> {
  constructor(private githubApiService: TicketFacade) {}

  resolve(route: ActivatedRouteSnapshot) {
    const username = route.paramMap.get('username');

    if (username) {
      this.githubApiService.loadUserFromLogin(username);
    }

    return of(!!username);
  }
}
