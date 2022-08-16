import { GithubOAuthService } from '@confs/auth/data-access';
import { State } from '@confs/shared/data-state';

interface AuthState {
  loading: boolean;
  user: unknown;
}

export class AuthFacade extends State<AuthState> {
  constructor(readonly authService: GithubOAuthService) {
    super({
      loading: false,
      user: null,
    });
  }


}
