import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { OAuthFacade } from '@confs/auth/data-access';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private oauthFacade: OAuthFacade,
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const user = route.queryParamMap.get('user') ?? 'developerparana';

    if (user) {
      this.oauthFacade.loadUserFromLogin(user);
    }

    return of(true);
  }
}
