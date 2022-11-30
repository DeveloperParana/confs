import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'confs-event-feature-local',
  styleUrls: ['./event-feature-local.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iframe
      [attr.src]="googleMapsUrl | safeUrl"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen=""
      style="border:0;"
      loading="lazy"
    ></iframe>
  `,
})
export class EventFeatureLocalComponent {
  get googleMapsUrl() {
    return [
      'https://www.google.com',
      '/maps/embed?pb=!',
      '4v1669393308894!',
      '6m8!1m7!1sCAoSLEFGMVFpcE55QmhWQ1RDU2FoenJaZ3VmdjB0b2dRN3M2TzVncXBUeFZVOG9z!',
      '2m2!1d-23.441820324219!2d-51.918724437257!3f99.15545257273192!',
      '4f11.77255769515854!5f0.4000000000000002',
    ].join('');
  }
}
