import { Provider } from '@angular/core';
import {
  ServerService,
  ProjectService,
  ProjectFacade,
} from '@confs/shared/data-access';
import { SubscribeFacade } from '@confs/shared/data-access';
import { OAuthFacade, OAuthGuard, OAuthService } from '@confs/auth/data-access';
import { OAuthResolver } from '@confs/auth/data-access';
import { Router } from '@angular/router';

export const eventFeatureShellProviders = (): Provider[] => [
  {
    provide: OAuthFacade,
    useClass: OAuthFacade,
    deps: [OAuthService, ServerService],
  },
  {
    provide: OAuthGuard,
    useClass: OAuthGuard,
    deps: [OAuthFacade],
  },
  {
    provide: OAuthResolver,
    useClass: OAuthResolver,
    deps: [OAuthFacade, Router],
  },
  {
    provide: SubscribeFacade,
    useClass: SubscribeFacade,
    deps: [ServerService],
  },
  {
    provide: ProjectService,
    useClass: ProjectService,
    deps: [ServerService],
  },
  {
    provide: ProjectFacade,
    useClass: ProjectFacade,
    deps: [ProjectService],
  },
];
