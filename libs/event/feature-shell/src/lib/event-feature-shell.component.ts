import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  templateUrl: './event-feature-shell.component.html',
  styleUrls: ['./event-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellComponent {
  readonly date: string;
  readonly cubes = {
    'left-top': '/assets/cube-orange.svg',
    'right-top': '/assets/cube-blue.svg',
    'left-bottom': '/assets/cube-green.svg',
    'right-bottom': '/assets/cube-purple.svg',
  };

  constructor(@Inject('event.date') eventDate: string) {
    this.date = new Date(eventDate).toLocaleDateString();
  }
}
