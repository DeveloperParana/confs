import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import { OAuthFacade } from '@confs/auth/data-access';
import { SubscribeFacade } from '@confs/shared/data-access';

@Component({
  templateUrl: './event-feature-subscribe.component.html',
  styleUrls: ['./event-feature-subscribe.component.scss'],
})
export class EventFeatureSubscribeComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  date;

  placeholder = {
    email: 'Ex.: seu.nome@gmail.com',
    acompanhe: 'Entre com seu e-mail',
  };

  images = [
    { path: '/assets/carousel/reinaldo-ferraz.jpg', alt: 'Reinaldo Ferraz' },
    { path: '/assets/carousel/lais-lima.jpg', alt: 'Lís Lima' },
    { path: '/assets/carousel/erick-wendel.jpg', alt: 'Erick Wendel' },
    { path: '/assets/carousel/william-grasel.jpg', alt: 'William Grasel' },
    { path: '/assets/carousel/giovanni-bassi.jpg', alt: 'Giovanni Bassi' },
    { path: '/assets/carousel/kelly-garcia.jpg', alt: 'Kelly Garcia' },
    { path: '/assets/carousel/alexandro-hervis.jpg', alt: 'Alexandro Hervis' },
    { path: '/assets/carousel/teo-calvo.jpg', alt: 'Teo Calvo' },
  ];

  constructor(
    @Inject('event.date') readonly eventDate: string,
    readonly subscribeFacade: SubscribeFacade,
    readonly oAuthFacade: OAuthFacade
  ) {
    this.date = new Date(eventDate);
  }

  handleCarouselEvents(event: any) {
    console.log(event);
  }

  changeFocus(input: HTMLInputElement) {
    if (input.placeholder === this.placeholder.email) {
      input.placeholder = this.placeholder.acompanhe;
    } else {
      input.placeholder = this.placeholder.email;
    }
  }

  onSubmit(input?: HTMLInputElement) {
    const { email = '' } = this.form.value;

    if (this.form.valid && email) {
      this.subscribeFacade.subscribe({ email });
      this.form.controls.email.reset();
    } else {
      this.form.markAllAsTouched();
      if (input) input.focus();
    }
  }
}
