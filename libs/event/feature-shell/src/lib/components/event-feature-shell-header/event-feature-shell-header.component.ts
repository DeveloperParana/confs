import {
  Input,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { CountdownFacade } from '@confs/event/data-state';

@Component({
  selector:
    'confs-event-feature-shell-header,header[confs-event-feature-shell]',
  templateUrl: './event-feature-shell-header.component.html',
  styleUrls: ['./event-feature-shell-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellHeaderComponent implements OnInit {
  @Input() date?: string;

  readonly countdown = new CountdownFacade();

  ngOnInit() {
    if (this.date) {
      const date = new Date(this.date);
      this.countdown.start(date);
    }
  }
}
