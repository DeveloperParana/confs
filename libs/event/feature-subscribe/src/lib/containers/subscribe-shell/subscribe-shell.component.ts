import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';
import { AuthFacade } from '@confs/auth/data-state';
import '@confs/event/ui-ticket';

@Component({
  templateUrl: './subscribe-shell.component.html',
  styleUrls: ['./subscribe-shell.component.scss'],
})
export class SubscribeShellComponent implements AfterViewInit {
  @ViewChild('email')
  readonly _emailRef!: ElementRef<HTMLInputElement>;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  private _formFocused = new BehaviorSubject<boolean>(false);
  readonly formFocused$ = this._formFocused.asObservable();

  constructor(
    readonly subscribeFacade: SubscribeFacade,
    readonly ticketFacade: TicketFacade,
    readonly authFacade: AuthFacade,
    readonly route: ActivatedRoute
  ) {
    const username = route.snapshot.paramMap.get('username');
    const login = username ?? 'developerparana';
    this.ticketFacade.loadUserFromLogin(login);

    this.authFacade.loadAuthorizeParams();
  }

  ngAfterViewInit() {
    const emailElement = this._emailRef.nativeElement;
    emailElement.onfocus = () => this.changeFocus();
    emailElement.onblur = () => this.changeFocus();
  }

  changeFocus() {
    const current = this._formFocused.value;
    this._formFocused.next(!current);
  }

  onSubmit(input?: HTMLInputElement) {
    const { email = '' } = this.form.value;

    if (this.form.valid && email) {
      this.subscribeFacade.subscribe({ email });
    } else {
      this.form.markAllAsTouched();
      if (input) input.focus();
    }
  }
}
