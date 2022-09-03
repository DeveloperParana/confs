import {
  Router,
  ActivationEnd,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

import { ProjectFacade } from '@confs/shared/project/data-access';

@Component({
  template: `
    <ng-container *ngIf="projectFacade.column$ | async as column">
      <confs-project-column [column]="column">
        <confs-project-column-card
          *ngFor="let card of projectFacade.cards$ | async"
          [card]="card"
        ></confs-project-column-card>
      </confs-project-column>
    </ng-container>

    <p *ngIf="projectFacade.loading$ | async">Carregando...</p>

    <h3>{{ projectFacade.message$ | async }}</h3>
  `,
  styleUrls: ['./event-feature-page.component.scss'],
})
export class EventFeaturePageComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    readonly projectFacade: ProjectFacade
  ) {}

  ngOnInit() {
    const columnId = this.getColumnId(this.route.snapshot);
    if (columnId) this.loadColumn(+columnId);

    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event) => {
        const { snapshot } = event as ActivationEnd;
        const columnId = this.getColumnId(snapshot);
        if (columnId) this.loadColumn(+columnId);
      });
  }

  loadColumn(columnId: number) {
    this.projectFacade.loadProjectColumn(columnId);
    this.projectFacade.loadProjectColumnCards(columnId);
  }

  getColumnId({ paramMap }: ActivatedRouteSnapshot) {
    const column = paramMap.get('column');
    return typeof column === 'string' ? column : null;
  }
}
