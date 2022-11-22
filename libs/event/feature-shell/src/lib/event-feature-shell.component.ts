import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { ProjectFacade } from '@confs/shared/project/data-access';


@Component({
  templateUrl: './event-feature-shell.component.html',
  styleUrls: ['./event-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellComponent {
  readonly date: string;

  constructor(
    readonly projectFacade: ProjectFacade,
    @Inject('event.date') eventDate: string,
    @Inject('pages') pages: { project: number }
  ) {
    this.date = new Date(eventDate).toDateString();
    this.projectFacade.loadProjectColumns(pages.project);
  }
}
