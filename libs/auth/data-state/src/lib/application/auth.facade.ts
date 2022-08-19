import { ApiService, OAuthService } from '@confs/auth/data-access';

import { GithubUser } from '@confs/auth/api-interfaces';
import { State } from '@confs/shared/data-state';

interface AuthState {
  loading: boolean;
  authorize: string;
  user: GithubUser | null;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  loading$ = this.select((state) => state.loading);

  authorize$ = this.select((state) => state.authorize);

  constructor(
    readonly apiService: ApiService,
    readonly oAuthService: OAuthService
  ) {
    super({
      loading: false,
      authorize: '',
      user: null,
    });
  }

  loadGithubAuthentication(code: string) {
    this.setState({ loading: true });

    const token$ = this.oAuthService.getAccessToken(code);

    const $token = token$.subscribe((response) => {
      const user$ = this.oAuthService.getUserInfo(response);

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

  loadAuthorizeParams() {
    const options = this.oAuthService.getParamsFromOptions();
    const params = new URLSearchParams(options);

    const url = 'https://github.com/login/oauth/authorize';
    const authorize = decodeURIComponent(`${url}?${params}`);

    this.setState({ authorize });
  }
}
