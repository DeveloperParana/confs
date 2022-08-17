import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'confs-twitter-button,a[confs-twitter-button]',
  template: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2 5.89412C20.4945 6.21539 19.735 6.43265 18.9382 6.52972C19.7519 6.03048 20.3762 5.23886 20.6703 4.29585C19.9085 4.75811 19.0667 5.0944 18.1674 5.27468C17.4506 4.49 16.4262 4 15.2925 4C13.1186 4 11.3549 5.80859 11.3549 8.039C11.3549 8.35565 11.3887 8.66306 11.4563 8.95891C8.18249 8.79018 5.28058 7.18382 3.33657 4.7373C2.99736 5.33593 2.80352 6.03048 2.80352 6.7701C2.80352 8.17075 3.49886 9.4073 4.55594 10.1319C3.91132 10.1122 3.30276 9.9285 2.77084 9.62803V9.67772C2.77084 11.6354 4.12882 13.2683 5.93196 13.6381C5.60176 13.7329 5.25353 13.7803 4.89403 13.7803C4.64046 13.7803 4.39253 13.756 4.15249 13.7086C4.65399 15.3127 6.10776 16.481 7.83201 16.5122C6.48416 17.5962 4.78471 18.2423 2.93988 18.2423C2.62208 18.2423 2.30766 18.2238 2 18.1868C3.74341 19.3309 5.81475 20 8.03824 20C15.2846 20 19.2458 13.8462 19.2458 8.5082C19.2458 8.33254 19.2425 8.15688 19.2357 7.98469C20.0054 7.41495 20.6737 6.70423 21.2 5.89412Z"
        fill="white"
      />
    </svg>
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
        padding: 0px 20px;
        gap: 10px;

        background: rgba(196, 196, 196, 0.01);
        box-shadow: inset 0px 39px 56px -36px #1da1f2,
          inset 0px 7px 11px -4px #1da1f2,
          inset 0px -82px 68px -64px rgba(96, 68, 145, 0.3),
          inset 0px 98px 100px -48px #1da1f2, inset 0px 4px 18px #1da1f2,
          inset 0px 1px 40px rgba(227, 222, 255, 0.2);
        transition: transform 0.2s ease-in-out;
        backdrop-filter: blur(100px);
      }
      :host .divider {
        width: 1px;
        height: 16px;
        background: rgba(255, 255, 255, 0.2);
      }
      :host svg {
        width: 24px;
      }
    `,
  ],
})
export class TwitterButtonComponent {
  @HostBinding('attr.class')
  shineEffect = 'shine-effect';
}
