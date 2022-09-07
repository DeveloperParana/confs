import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CountdownRecord } from './countdown-record.interface';

@Component({
  selector: 'event-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent {
  @Input() value?: Observable<CountdownRecord>;
}
