import { Provider } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {
  ProjectService,
  ProjectFacade,
} from '@confs/shared/project/data-access';
import {
  SubscribeFacade,
  TicketFacade,
  EventFacade,
} from '@confs/event/data-state';
import { Http, ServerService } from '@confs/shared/data-access';
import { OAuthService } from '@confs/auth/data-access';
import { OAuthResolver } from '@confs/event/feature-subscribe';
import { EventFeaturePageTitleStrategy } from '@confs/event/feature-page';

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
  {
    provide: ProjectFacade,
    useClass: ProjectFacade,
    deps: [ProjectService],
  },
  {
    provide: TitleStrategy,
    useClass: EventFeaturePageTitleStrategy,
    deps: [ProjectFacade, Title],
  },
  OAuthResolver,
];
