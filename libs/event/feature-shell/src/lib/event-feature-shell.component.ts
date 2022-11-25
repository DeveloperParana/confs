import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { LoaderService } from '@confs/shared/data-access';

import { ProjectFacade } from '@confs/shared/data-access';

@Component({
  template: `
    <header
      confs-event-feature
      [columns]="projectFacade.columns$ | async"
      [date]="date"
    >
      <time>
        {{ date | date : 'longDate' }}
      </time>

      <confs-event-feature-counter [date]="date"></confs-event-feature-counter>
    </header>

    <main>
      <router-outlet></router-outlet>

      <figure class="loader" *ngIf="loaderService.visible$ | async">
        <object data="/assets/loading.svg"></object>
        <caption>
          Carregando
        </caption>
      </figure>
    </main>

    <footer confs-event-feature [year]="year"></footer>
  `,
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
