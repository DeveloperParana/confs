import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { AccessTokenResponse } from '@confs/auth/api-interfaces';
import { AuthFacade } from '@confs/auth/data-state';

@Injectable({
  providedIn: 'root',
})
export class OAuthResolver implements Resolve<AccessTokenResponse | boolean> {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const code = route.queryParamMap.get('code');
    if (code) {
      this.authFacade.loadGithubAuthentication(code);

      const user$ = this.authFacade.user$;

      const $user = user$.subscribe((user) => {
        if (user) {
          this.router.navigate(['/', user.login]);
          $user.unsubscribe();
        }
      });
    }

    return of(true);
  }
}
