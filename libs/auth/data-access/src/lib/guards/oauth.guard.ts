import {of} from 'rxjs';

import {
  CanActivate,
  ActivatedRouteSnapshot,
} from '@confs/shared/api-interfaces';

import {OAuthFacade} from '../application/oauth.facade';

export class OAuthGuard implements CanActivate {
  constructor(private oauthFacade: OAuthFacade) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const user = route.queryParamMap.get('user') ?? 'developerparana';

    if (user) {
      this.oauthFacade.loadUserFromLogin(user);
    }

    return of(true);
  }
}
