import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectFacade } from '@confs/shared/project/data-access';

@Component({
  template: `
    <ng-container *ngIf="projectFacade.column$ | async as column">
      <header>
        <h1>{{ column.name }}</h1>
      </header>

      <section>
        <confs-project-column-card
          *ngFor="let card of projectFacade.cards$ | async"
          [card]="card"
        ></confs-project-column-card>
      </section>
    </ng-container>

    <p *ngIf="projectFacade.loading$ | async">Carregando...</p>

    <h3>{{ projectFacade.message$ | async }}</h3>
  `,
  styleUrls: ['./event-feature-page.component.scss']
})
export class EventFeaturePageComponent implements OnInit {
  constructor(
    readonly projectFacade: ProjectFacade,
    private readonly route: ActivatedRoute,
    @Inject('pages') readonly pages: Record<string, number>
  ) {}

  ngOnInit() {
    const columnId = this.getColumnId(this.route.snapshot);
    if (columnId) {
      this.projectFacade.loadProjectColumn(columnId);
      this.projectFacade.loadProjectColumnCards(columnId);
    }
  }

  getColumnId({ paramMap }: ActivatedRouteSnapshot) {
    const column = paramMap.get('column');
    return typeof column === 'string' ? this.pages[column] : null;
  }
}
