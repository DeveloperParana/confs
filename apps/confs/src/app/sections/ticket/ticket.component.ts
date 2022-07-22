import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'confs-ticket, section[confs-ticket]',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  constructor(readonly authService: AuthService) {}
}
