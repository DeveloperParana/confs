import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ProjectFacade } from '@confs/shared/project/data-access';

@Component({
  templateUrl: './event-feature-shell.component.html',
  styleUrls: ['./event-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellComponent {
  readonly date: string;
  readonly cubes = {
    'left-top': '/assets/cube-orange.svg',
    'right-top': '/assets/cube-blue.svg',
    'left-bottom': '/assets/cube-green.svg',
    'right-bottom': '/assets/cube-purple.svg',
  };

  constructor(
    readonly projectFacade: ProjectFacade,
    @Inject('event.date') eventDate: string,
    @Inject('pages') pages: { project: number }
  ) {
    this.date = new Date(eventDate).toLocaleDateString();
    this.projectFacade.loadProjectColumns(pages.project);
  }
}
