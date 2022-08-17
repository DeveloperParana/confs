import { GithubOAuthService } from '@confs/auth/data-access';
import { State } from '@confs/shared/data-state';

interface AuthState {
  loading: boolean;
  authorize: string;
  user: unknown;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  loading$ = this.select((state) => state.loading);

  authorize$ = this.select((state) => state.authorize);

  constructor(readonly authService: GithubOAuthService) {
    super({
      loading: false,
      authorize: '',
      user: null,
    });
  }

  loadGithubAuthentication() {
    this.setState({ loading: true });

    this.authService.getAccessToken('code').subscribe(({ accessToken }) => {
      this.authService.getUserInfo(accessToken).subscribe((user) => {
        this.setState({
          loading: false,
          user,
        });
      });
    });
  }

  loadAuthorizeParams() {
    const options = this.authService.getParamsFromOptions();
    const params = new URLSearchParams(options);

    const url = 'https://github.com/login/oauth/authorize';
    const authorize = decodeURIComponent(`${url}?${params}`);

    this.setState({ authorize });
  }
}
