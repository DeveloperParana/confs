import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { ProjectFacade } from '@confs/shared/project/data-access';

@Injectable()
export class EventFeaturePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly projectFacade: ProjectFacade,
    private readonly title: Title
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState) ?? 'DevPR Conf';

    this.projectFacade.column$.pipe(take(2)).subscribe((column) => {
      if (column) {
        this.title.setTitle(`${column.name} - ${title}`);
      } else {
        this.title.setTitle(title);
      }
    });
  }
}
