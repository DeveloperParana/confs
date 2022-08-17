import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'confs-subscribe-form,fieldset[confs-subscribe-form]',
  template: `
    <input
      type="email"
      [formControl]="control"
      (keyup.enter)="submit()"
      placeholder="Acompanhe nossa programação"
    />
    <button type="button" (click)="submit()">Registrar</button>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
      :host input {
        flex: 1;
      }
    `,
  ],
})
export class SubscribeFormComponent implements OnInit, OnDestroy {
  private _subject = new Subject<void>();

  @Output() valueChange = new EventEmitter<string | null>();
  @Output() formSubmit = new EventEmitter<string | null>();

  control = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntil(this._subject))
      .subscribe((email) => {
        return this.valueChange.emit(email);
      });
  }

  ngOnDestroy() {
    this._subject.next();
    this._subject.complete();
  }

  submit() {
    this.formSubmit.emit(this.control.value);
  }
}
