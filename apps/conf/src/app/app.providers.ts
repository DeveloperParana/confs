import { Provider } from '@angular/core';

import { Http, HttpService, ServerService } from '@confs/shared/data-access';
import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';
import { OAuthService } from '@confs/auth/data-access';

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
    provide: Http,
    useClass: HttpService,
  },
  {
    provide: OAuthService,
    useClass: OAuthService,
    deps: [Http, 'github.oauth.options', 'server.api'],
  },
  {
    provide: TicketFacade,
    useClass: TicketFacade,
    deps: [Http, OAuthService],
  },
  {
    provide: ServerService,
    useClass: ServerService,
    deps: [Http, 'server.api'],
  },
  {
    provide: SubscribeFacade,
    useClass: SubscribeFacade,
    deps: [ServerService],
  },
];
