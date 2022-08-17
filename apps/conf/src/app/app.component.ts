import { Component } from '@angular/core';

@Component({
  selector: 'conf-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  title = 'conf';
}
