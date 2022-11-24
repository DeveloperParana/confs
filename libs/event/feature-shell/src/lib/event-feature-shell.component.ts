import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { LoaderService } from '@confs/shared/data-access';

import { ProjectFacade } from '@confs/shared/data-access';

@Component({
  templateUrl: './event-feature-shell.component.html',
  styleUrls: ['./event-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellComponent {
  readonly date: Date;

  year = '';

  constructor(
    readonly projectFacade: ProjectFacade,
    readonly loaderService: LoaderService,
    @Inject('event.date') readonly eventDate: string,
    @Inject('pages') readonly pages: { project: number }
  ) {
    console.log(new Date(this.eventDate));

    this.date = new Date(eventDate);
    this.year = this.date.getFullYear().toString();
    this.projectFacade.loadProjectColumns(pages.project);
  }
}
