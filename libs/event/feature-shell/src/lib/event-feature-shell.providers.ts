import { Provider } from '@angular/core';
import {
  ServerService,
  ProjectService,
  ProjectFacade,
} from '@confs/shared/data-access';
import { OAuthService } from '@confs/auth/data-access';
import { OAuthResolver } from '@confs/event/feature-subscribe';
import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';

export const eventFeatureShellProviders = (): Provider[] => [
  {
    provide: TicketFacade,
    useClass: TicketFacade,
    deps: [OAuthService, ServerService],
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
  OAuthResolver,
];
