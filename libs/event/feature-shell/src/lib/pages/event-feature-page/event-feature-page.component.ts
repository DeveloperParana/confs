import {Component, ViewEncapsulation} from '@angular/core';
import {ProjectColumn, ProjectColumnCard} from '@confs/shared/api-interfaces';
import {ActivatedRoute, Data} from '@angular/router';
import {BehaviorSubject, map, tap} from 'rxjs';

@Component({
  selector: 'confs-event-feature-page',
  templateUrl: './event-feature-page.component.html',
  styleUrls: ['./event-feature-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventFeaturePageComponent {
  private _all = new BehaviorSubject<ProjectColumnCard[]>([]);

  private _cards = new BehaviorSubject<ProjectColumnCard[]>([]);
  cards$ = this._cards.asObservable();

  onSearch(value: string) {
    this._cards.next(
      this._all.value.filter((card) => card.note.indexOf(value) > -1)
    );
  }

  readonly column$ = this._route.data.pipe(
    map<Data, ProjectColumn>(({column}) => column),
    tap((column) => {
      this._cards.next(column.cards ?? []);
      this._all.next(column.cards ?? []);
    })
  );

  constructor(private _route: ActivatedRoute) {}
}
