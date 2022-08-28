import { LOCALE_ID, Provider } from '@angular/core';
import ptBR from '@angular/common/locales/extra/br';
import pt from '@angular/common/locales/pt';

import { Http, HttpService, ServerService } from '@confs/shared/data-access';
import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';
import { OAuthService } from '@confs/auth/data-access';

import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';

registerLocaleData(pt, 'pt-BR', ptBR);

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
    provide: ServerService,
    useClass: ServerService,
    deps: [Http, 'server.api'],
  },
  {
    provide: TicketFacade,
    useClass: TicketFacade,
    deps: [Http, OAuthService, ServerService],
  },
  {
    provide: SubscribeFacade,
    useClass: SubscribeFacade,
    deps: [ServerService],
  },
  {
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  },
];
