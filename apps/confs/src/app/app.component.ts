import { Component, OnInit } from '@angular/core';
import { EventTicketElement } from '@confs/event/ui-ticket'

@Component({
  selector: 'confs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'confs';

  user = {
    id: '5638096',
    login: 'guiseek',
    name: 'Guilherme Siquinelli',
    avatar: 'https://avatars.githubusercontent.com/u/5638096?v=4',
  }

  ngOnInit() {
    const eventTicket = new EventTicketElement();
    console.log(eventTicket);

  }
}
