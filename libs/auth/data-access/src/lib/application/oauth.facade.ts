import {
  User,
  GithubUser,
  AccessTokenResponse,
} from '@confs/auth/api-interfaces';
import { ServerService, StateStore } from '@confs/shared/data-access';
import { createOAuthStorage } from '../infrastructure/oauth.storage';
import { OAuthService } from '../infrastructure/oauth.service';
import { UserMapper } from '../mapper/user.mapper';
import { map } from 'rxjs';

interface OAuthState {
  loading: boolean;
  message: string | null;
  authorize: string;
  user: User | null;
}

export class OAuthFacade extends StateStore<OAuthState> {
  loading$ = this.select((state) => state.loading);

  user$ = this.select((state) => state.user);

  message$ = this.select((state) => state.message);

  authorize$ = this.select((state) => state.authorize);

  storage = createOAuthStorage<AccessTokenResponse>();

  constructor(
    readonly oAuthService: OAuthService,
    readonly serverService: ServerService
  ) {
    super({
      loading: false,
      message: null,
      authorize: '',
      user: null,
    });
  }

  /**
   * Prepara a URL que inicia o processo de autenticação
   * É lá que o usuário verifica as permissões e aceita ou não
   * Caso aceite, o github redireciona para URL configurada
   * contendo um código que será usado pra solicitar um token
   */
  loadAuthorizeParams() {
    const options = this.oAuthService.getParamsFromOptions();
    const params = new URLSearchParams(options);

    const url = 'https://github.com/login/oauth/authorize';
    const authorize = decodeURIComponent(`${url}?${params}`);

    this.setState({ authorize });
  }

  /**
   * Continua o processo de autenticação após o github
   * redirecionar o usuário para a url configurada,
   * contendo o código que será usado para solicitar
   * um token ao usuário que dono da autenticação
   *
   * @param code
   *
   */
  loadGithubAuthentication(code: string) {
    this.setState({ loading: true });

    const token$ = this.oAuthService.getAccessToken(code);

    const $token = token$.subscribe((response) => {
      const user$ = this.oAuthService
        .getUserInfo(response)
        // Normaliza o objeto de
        // snake_case pra camelCase
        .pipe(map(UserMapper.normalizeUser));

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

  /**
   * Solicita ao server os dados do github
   * a partir de um login (usuáraio github)
   *
   * @param login
   *
   */
  loadUserFromLogin(login: string) {
    this.setState({ loading: true });

    const user$ = this.serverService
      .get<GithubUser>(`users/${login}`)
      .pipe(map(UserMapper.normalizeUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }

  /**
   * Solicita ao server os dados do
   * github a partir de um id (id do github)
   *
   * @param id
   *
   */
  loadUserFromId(id: string) {
    this.setState({ loading: true });

    const user$ = this.serverService
      .get<GithubUser>(`user/${id}`)
      .pipe(map(UserMapper.normalizeUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }
}
