import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectColumn } from '@confs/shared/api-interfaces';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'confs-event-feature-page',
  templateUrl: './event-feature-page.component.html',
  styleUrls: ['./event-feature-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventFeaturePageComponent {
  readonly column$ = this._route.data.pipe(
    map<Data, ProjectColumn>(({ column }) => column)
  );

  constructor(private _route: ActivatedRoute) {}
}
