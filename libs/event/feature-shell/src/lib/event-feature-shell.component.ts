import {
  Inject,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LoaderService } from '@confs/shared/data-access';

import { ProjectFacade } from '@confs/shared/data-access';

@Component({
  selector: 'confs-feature-shell',
  templateUrl: './event-feature-shell.component.html',
  styleUrls: ['./event-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellComponent {
  readonly date: Date;

  year = '';

  @HostBinding('attr.itemprop')
  itemprop = 'event';

  @HostBinding('attr.itemscope')
  itemscope = '';

  @HostBinding('attr.itemtype')
  itemtype = 'https://schema.org/Event';

  constructor(
    readonly projectFacade: ProjectFacade,
    readonly loaderService: LoaderService,
    @Inject('event.date') readonly eventDate: string,
    @Inject('pages') readonly pages: { project: number }
  ) {
    const date = new Date(eventDate)
    this.date = date;
    this.year = date.getFullYear().toString();
    this.projectFacade.loadProjectColumns(pages.project);
  }
}
