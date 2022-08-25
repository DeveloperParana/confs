import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, map } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Member } from '@confs/shared/api-interfaces';

import { CertComponent } from './cert.component';
import { env } from '../envs/env';

const filterMembers = (member: string | null) => {
  return (m: Member): string[] => {
    const value = member?.toLowerCase() ?? '';
    const names = value.split(' ');

    const founded = names.filter((name) =>
      name.toLowerCase().includes(value) ? m : null
    );

    return founded;
  };
};

@Component({
  standalone: true,
  selector: 'cert-root',
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, CertComponent],
  template: `
    <ng-container *ngIf="selected$ | async as name; else cert">
      <cert-image [name]="name"></cert-image>
    </ng-container>

    <ng-template #cert>
      <fieldset>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <label>
            <input
              autofocus
              type="search"
              name="member"
              list="members"
              formControlName="member"
              placeholder="Digite seu nome"
            />
          </label>
          <datalist id="members" (click)="onSubmit()">
            <ng-container *ngFor="let member of autocomplete$ | async">
              <option [value]="member.name">
                {{ member.city }}
              </option>
            </ng-container>
          </datalist>
        </form>
      </fieldset>
    </ng-template>
  `,
})
export class AppComponent {
  title = 'cert';

  form = new FormGroup({
    member: new FormControl(''),
  });

  private _selected = new BehaviorSubject('');
  readonly selected$ = this._selected.asObservable();

  readonly autocomplete$: Observable<Member[]>;

  constructor(private _http: HttpClient) {
    const members = this._http.get<Member[]>(env['server.api']);

    const form = this.form.valueChanges;

    const autocomplete$ = combineLatest({ members, form });

    this.autocomplete$ = autocomplete$.pipe(
      map(({ members, form }) => {
        return form.member
          ? members.filter(filterMembers(form.member))
          : members;
      })
    );
  }

  onSubmit() {
    const { member } = this.form.value;
    if (this.form.valid && member) {
      this._selected.next(member);
    }
  }

  onClear() {
    this._selected.next('');
  }
}
