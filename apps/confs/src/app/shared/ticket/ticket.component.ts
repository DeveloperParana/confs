import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'confs-ticket,section[confs-ticket]',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  public userId!: number;

  constructor(readonly auth: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.userId = params['id']));
  }

  ngOnInit(): void {
    this.auth.loadUser();
    console.log(this.userId);
  }
}
