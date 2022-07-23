import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'confs-ticket,section[confs-ticket]',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  constructor(readonly auth: AuthService) {}

  ngOnInit(): void {
    this.auth.loadUser()
  }
}
