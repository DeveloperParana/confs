import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'confs-event-feature-local',
  styleUrls: ['./event-feature-local.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <iframe
        [attr.src]="src | safeUrl"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    <ng-container *ngIf="resizer$ | async as resizer">
    </ng-container>
  `,
})
export class EventFeatureLocalComponent {
  resizer$;

  constructor() {
    const getWindowSize = () => ({ width: innerWidth, height: innerHeight });
    this.resizer$ = fromEvent(window, 'resize').pipe(map(getWindowSize));
  }

  src = 'https://www.google.com/maps/embed?pb=!4v1669393308894!6m8!1m7!1sCAoSLEFGMVFpcE55QmhWQ1RDU2FoenJaZ3VmdjB0b2dRN3M2TzVncXBUeFZVOG9z!2m2!1d-23.441820324219!2d-51.918724437257!3f99.15545257273192!4f11.77255769515854!5f0.4000000000000002';
  // src =
  //   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5313727766566!2d-51.91905498454402!3d-23.44128988474267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a413a9c9463%3A0x4e3ee356ad1bd6c3!2sUniCesumar%20-%20Maring%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1669391955372!5m2!1spt-BR!2sbr';
}
