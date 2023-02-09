import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import { OAuthFacade } from '@confs/auth/data-access';
import {
  ProjectMapper,
  ProjectService,
  SubscribeFacade,
} from '@confs/shared/data-access';
import { map } from 'rxjs';

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

  images$ = this.projectService.getProjectColumnCards(19259040).pipe(
    map(ProjectMapper.normalizeCards),
    map((cards) => cards.reverse()),
    map((cards) => {
      return cards.map((card) => {
        const parser = new DOMParser();
        const html = parser.parseFromString(card.note, 'text/html');
        const img = html.querySelector('img');
        const h3 = html.querySelector('h3');
        return img
          ? { path: img.getAttribute('src'), alt: h3?.innerText }
          : { path: '', alt: '' };
      });
    })
  );

  constructor(
    @Inject('event.date') readonly eventDate: string,
    private readonly projectService: ProjectService,
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
