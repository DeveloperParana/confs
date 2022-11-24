import {
  Input,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { User } from '@confs/auth/api-interfaces';

@Component({
  selector: 'confs-event-ticket',
  templateUrl: './event-ticket.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class EventTicketComponent {
  @Input() user?: User;

  public _width = 320;

  set width(value: number) {
    this._width = value;
  }

  @Input()
  @HostBinding('attr.class')
  get width() {
    return this._width;
  }
}
