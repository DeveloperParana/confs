import {
  Input,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { User } from '@confs/auth/api-interfaces';

@Component({
  selector: 'confs-event-feature-ticket',
  templateUrl: './event-feature-ticket.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class EventFeatureTicketComponent {
  @Input() user?: User;

  public _width = 466;

  set width(value: number) {
    this._width = value;
  }

  @Input()
  @HostBinding('attr.class')
  get width() {
    return this._width;
  }
}
