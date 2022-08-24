import { ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TicketFacade } from '@confs/event/data-state';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivateChild {
  constructor(private ticketFacade: TicketFacade) {}

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    const user = route.queryParamMap.get('user') ?? 'developerparana';

    if (user) {
      this.ticketFacade.loadUserFromLogin(user);
    }

    return of(true);
  }
}
