import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: `
      confs-event-feature-button,
      button[confs-event-feature]
      a[confs-event-feature],
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="svg"></ng-content>
    <span class="divider"></span>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        height: 48px;
        border-radius: 8px;
        padding: 0px 8px;
        gap: 8px;

        background-color: rgba(196, 196, 196, 0.01);
        box-shadow: inset 0px 39px 56px -36px #4a5963,
          inset 0px 7px 11px -4px #4a5963,
          inset 0px -82px 68px -64px rgba(96, 68, 145, 0.3),
          inset 0px 98px 100px -48px #4a5963, inset 0px 4px 18px #4a5963,
          inset 0px 1px 40px rgba(227, 222, 255, 0.2);
        transition: transform 0.2s ease-in-out;
        backdrop-filter: blur(100px);
      }
      :host .divider {
        width: 1px;
        height: 16px;
        background: rgba(255, 255, 255, 0.2);
      }
    `,
  ],
})
export class EventFeatureButtonComponent {
  @HostBinding('attr.class')
  shineEffect = 'shine-effect';
}
