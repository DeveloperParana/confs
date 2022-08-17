import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { AccessTokenResponse } from '@confs/auth/api-interfaces';
import { OAuthService } from '@confs/auth/data-access';

@Injectable({
  providedIn: 'root',
})
export class OAuthResolver
  implements Resolve<AccessTokenResponse | boolean>
{
  constructor(private oAuthService: OAuthService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const code = route.queryParamMap.get('code');
    return code ? this.oAuthService.getAccessToken(code) : of(true);
  }
}
