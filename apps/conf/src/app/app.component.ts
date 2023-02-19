import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'conf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conf';

  @HostBinding('attr.itemprop')
  itemprop = 'organization';

  @HostBinding('attr.itemscope')
  itemscope = '';

  @HostBinding('attr.itemtype')
  itemtype = 'https://schema.org/Organization';
}
