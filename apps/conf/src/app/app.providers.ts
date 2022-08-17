import { Provider } from '@angular/core';

import { GithubOAuthOptions } from '@confs/auth/api-interfaces';
import { GithubOAuthService } from '@confs/auth/data-access';
import { AuthFacade } from '@confs/auth/data-state';

import { environment } from '../environments/environment';

export const APP_PROVIDERS: Provider[] = [
  {
    provide: 'github.oauth.options',
    useValue: environment['github.oauth.options'],
  },
  {
    provide: GithubOAuthService,
    useFactory: (options: GithubOAuthOptions) =>
      new GithubOAuthService(options),
    deps: ['github.oauth.options'],
  },
  {
    provide: AuthFacade,
    useFactory: (authService: GithubOAuthService) =>
      new AuthFacade(authService),
    deps: [GithubOAuthService],
  },
];
