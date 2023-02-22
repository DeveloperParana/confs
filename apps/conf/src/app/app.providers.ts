import {HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LOCALE_ID, Provider} from '@angular/core';
import ptBR from '@angular/common/locales/extra/br';
import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt';

import {environment} from '../environments/environment';

import {
  ClientInterceptor,
  HttpClientService,
  LoaderService,
  ServerService,
} from '@confs/shared/data-access';
import {eventFeatureShellProviders} from '@confs/event/feature-shell';
import {OAuthService} from '@confs/auth/data-access';

registerLocaleData(pt, 'pt-BR', ptBR);

const VALUE_PROVIDERS = [
  {
    provide: 'github.oauth.options',
    useValue: environment['github.oauth.options'],
  },
  {
    provide: 'server.api',
    useValue: environment['server.api'],
  },
  {
    provide: 'event.date',
    useValue: environment['event.date'],
  },
  {
    provide: 'pages',
    useValue: environment['pages'],
  },
  {
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  },
];

const HTTP_PROVIDERS = [
  {
    provide: HttpClientService,
    useClass: HttpClient,
  },
  {
    provide: OAuthService,
    useClass: OAuthService,
    deps: [ServerService, HttpClientService, 'github.oauth.options'],
  },
  {
    provide: ServerService,
    useClass: ServerService,
    deps: [HttpClientService, 'server.api'],
  },
  {
    provide: LoaderService,
    useClass: LoaderService,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useFactory: (loaderService: LoaderService) => {
      return new ClientInterceptor(loaderService);
    },
    deps: [LoaderService],
    multi: true,
  },
];

const EVENT_PROVIDERS = eventFeatureShellProviders();

export const APP_PROVIDERS: Provider[] = [
  ...VALUE_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...EVENT_PROVIDERS,
];
