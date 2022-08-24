import { map } from 'rxjs';

import { AccessTokenResponse, GithubUser } from '@confs/auth/api-interfaces';
import { OAuthService, OAuthStorage } from '@confs/auth/data-access';
import { Http } from '@confs/shared/data-access';
import { StateStore } from '@confs/shared/data-access';

import { mapToTicketUser } from '../utilities';
import { TicketUser } from '../entities';

interface TicketState {
  loading: boolean;
  error: string | null;
  authorize: string;
  user: TicketUser | null;
}

export class TicketFacade extends StateStore<TicketState> {
  loading$ = this.select((state) => state.loading);

  user$ = this.select((state) => state.user);

  authorize$ = this.select((state) => state.authorize);

  storage = new OAuthStorage<AccessTokenResponse>(localStorage);

  constructor(readonly httpService: Http, readonly oAuthService: OAuthService) {
    super({
      loading: false,
      error: null,
      authorize: '',
      user: null,
    });
  }

  loadGithubAuthentication(code: string) {
    this.setState({ loading: true });

    const token$ = this.oAuthService.getAccessToken(code);

    const $token = token$.subscribe((response) => {
      const user$ = this.oAuthService
        .getUserInfo(response)
        .pipe(map(mapToTicketUser));

      const $user = user$.subscribe((user) => {
        $token.unsubscribe();
        $user.unsubscribe();

        this.setState({
          loading: false,
          user,
        });
      });
    });
  }

  loadUserFromLogin(user: string) {
    this.setState({ loading: true });

    const url = 'https://api.github.com/users';

    const user$ = this.httpService
      .get<GithubUser>(`${url}/${user}`)
      .pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }

  loadUserFromId(id: string) {
    this.setState({ loading: true });

    const url = 'https://api.github.com/user';

    const user$ = this.httpService
      .get<GithubUser>(`${url}/${id}`)
      .pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }

  loadAuthorizeParams() {
    const options = this.oAuthService.getParamsFromOptions();
    const params = new URLSearchParams(options);

    const url = 'https://github.com/login/oauth/authorize';
    const authorize = decodeURIComponent(`${url}?${params}`);

    this.setState({ authorize });
  }
}
