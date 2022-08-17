import { Component } from '@angular/core';

@Component({
  selector: 'conf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conf';

  date = new Date('05/11/2022').toLocaleDateString();
}
