import { of } from 'rxjs';

import { Resolve, Router } from '@confs/shared/api-interfaces';

import { OAuthFacade } from '../application/oauth.facade';

export class OAuthResolver implements Resolve<boolean> {

  constructor(private oAuthFacade: OAuthFacade,  private router: Router) {}

  resolve() {
    const url = new URL(location.href);
    const code = url.searchParams.get('code');

    if (code) {
      const user$ = this.oAuthFacade.user$;
      const $user = user$.subscribe((user) => {
        if (user) {
          this.router.navigate(['/'], { queryParams: { user: user.login } });
          $user.unsubscribe();
        }
      });
      this.oAuthFacade.loadGithubAuthentication(code);
    }

    return of(true);
  }
}
