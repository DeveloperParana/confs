import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TicketFacade } from '@confs/event/data-access';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private ticketFacade: TicketFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const user = route.queryParamMap.get('user') ?? 'developerparana';

    if (user) {
      this.ticketFacade.loadUserFromLogin(user);
    }

    return of(true);
  }
}
