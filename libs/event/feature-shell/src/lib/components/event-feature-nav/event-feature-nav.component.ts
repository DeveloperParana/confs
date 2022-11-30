import {
  ViewChild,
  Component,
  HostListener,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ButtonNavToggleComponent } from './button-nav-toggle/button-nav-toggle.component';

@Component({
  selector: 'confs-event-feature-nav,nav[confs-event-feature]',
  templateUrl: './event-feature-nav.component.html',
  styleUrls: ['./event-feature-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EventFeatureNavComponent {
  @ViewChild(ButtonNavToggleComponent)
  navToggle!: ButtonNavToggleComponent;

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLInputElement | HTMLAnchorElement) {
    if (target instanceof HTMLAnchorElement) {
      const state = this.navToggle.opened;
      this.navToggle.setCheckboxState(!state);
    }
  }
}
