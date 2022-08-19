import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TicketFacade } from '@confs/event/data-state';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private ticketFacade: TicketFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const username = route.paramMap.get('username');

    if (username) {
      this.ticketFacade.loadUserFromLogin(username);
    }

    return of(true);
  }
}
