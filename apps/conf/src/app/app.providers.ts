import { Provider } from '@angular/core';

import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';
import { ApiService, OAuthService } from '@confs/auth/data-access';
import { GithubOAuthOptions } from '@confs/auth/api-interfaces';
import { ServerService } from '@confs/shared/data-access';
import { AuthFacade } from '@confs/auth/data-state';

import { environment } from '../environments/environment';

export const APP_PROVIDERS: Provider[] = [
  {
    provide: 'github.oauth.options',
    useValue: environment['github.oauth.options'],
  },
  {
    provide: 'server.api',
    useValue: environment['server.api'],
  },
  {
    provide: ApiService,
    useClass: ApiService,
  },
  {
    provide: OAuthService,
    useFactory: (options: GithubOAuthOptions) => new OAuthService(options),
    deps: ['github.oauth.options'],
  },
  {
    provide: AuthFacade,
    useFactory: (apiService: ApiService, oAuthService: OAuthService) => {
      return new AuthFacade(apiService, oAuthService);
    },
    deps: [ApiService, OAuthService],
  },
  {
    provide: TicketFacade,
    useFactory: (githubApiService: ApiService) => {
      return new TicketFacade(githubApiService);
    },
    deps: [ApiService],
  },
  {
    provide: ServerService,
    useFactory: (url: string) => new ServerService(url),
    deps: ['server.api'],
  },
  {
    provide: SubscribeFacade,
    useFactory: (serverApiService: ServerService) => {
      return new SubscribeFacade(serverApiService);
    },
    deps: [ServerService],
  },
];
