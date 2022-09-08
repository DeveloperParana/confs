import { Provider } from '@angular/core';

import { Http, ServerService } from '@confs/shared/data-access';
import { ProjectService } from '@confs/shared/project/data-access';
import {
  SubscribeFacade,
  TicketFacade,
  EventFacade,
} from '@confs/event/data-state';
import { OAuthResolver } from '@confs/event/feature-subscribe';
import { OAuthService } from '@confs/auth/data-access';

export const eventFeatureShellProviders = (): Provider[] => [
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
    provide: ProjectService,
    useClass: ProjectService,
    deps: [Http, 'server.api'],
  },
  {
    provide: EventFacade,
    useClass: EventFacade,
    deps: [ProjectService],
  },
  OAuthResolver,
];
