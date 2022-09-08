import { Component, Inject, OnInit } from '@angular/core';

import { ProjectsConfig } from '@confs/shared/api-interfaces';
import { EventFacade } from '@confs/event/data-state';

@Component({
  template: `
    <ng-container *ngIf="eventFacade.sponsors$ | async as sponsors">
      <header>
        <h2>{{ sponsors.project?.name }}</h2>
        <p>{{ sponsors.project?.body }}</p>
      </header>
      <section>
        <confs-project-column-card
          *ngFor="let card of sponsors.cards"
          [card]="card"
        ></confs-project-column-card>
      </section>
    </ng-container>
    <figure class="loader" *ngIf="eventFacade.loading$ | async">
      <object data="/assets/loading.svg"></object>
      <caption>
        Carregando...
      </caption>
    </figure>
  `,
  styleUrls: ['./event-feature-sponsors.component.scss'],
})
export class EventFeatureSponsorsComponent implements OnInit {
  constructor(
    readonly eventFacade: EventFacade,
    @Inject('github.projects')
    readonly projects: ProjectsConfig
  ) {}

  ngOnInit() {
    const { sponsors } = this.projects;
    this.eventFacade.loadProject(sponsors, 'sponsors');
  }
}
