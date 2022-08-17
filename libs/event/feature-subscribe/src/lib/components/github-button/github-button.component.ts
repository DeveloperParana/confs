import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'confs-github-button,a[confs-github-button]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9992 0C5.37299 0 0 5.39353 0 12.0483C0 17.3703 3.43799 21.8859 8.20724 23.4792C8.80725 23.5899 9.02625 23.2179 9.02625 22.8987C9.02625 22.6125 9.01573 21.855 9.00974 20.8498C5.67148 21.5779 4.96725 19.2347 4.96725 19.2347C4.422 17.8432 3.63525 17.4727 3.63525 17.4727C2.5455 16.725 3.71774 16.7401 3.71774 16.7401C4.92149 16.8252 5.55524 17.9818 5.55524 17.9818C6.62624 19.8228 8.364 19.2912 9.048 18.9825C9.15675 18.2039 9.46725 17.673 9.81 17.3719C7.14525 17.0677 4.34399 16.0346 4.34399 11.4181C4.34399 10.1026 4.81125 9.02739 5.57925 8.18481C5.4555 7.87986 5.04376 6.65553 5.69626 4.99673C5.69626 4.99673 6.70425 4.67294 8.99625 6.2316C9.954 5.96429 10.98 5.83102 12.0008 5.82574C13.02 5.83102 14.0467 5.96429 15.0052 6.2316C17.2957 4.67294 18.3015 4.99673 18.3015 4.99673C18.9563 6.65553 18.5445 7.87986 18.4207 8.18481C19.1902 9.02739 19.6545 10.1026 19.6545 11.4181C19.6545 16.0459 16.8488 17.0646 14.1758 17.3628C14.6063 17.7348 14.9903 18.4697 14.9903 19.5939C14.9903 21.2045 14.9753 22.5033 14.9753 22.8987C14.9753 23.2209 15.1913 23.5959 15.8003 23.4777C20.565 21.8814 24 17.3688 24 12.0483C24 5.39353 18.627 0 11.9992 0Z"
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
export class GithubButtonComponent {
  @HostBinding('attr.class')
  shineEffect = 'shine-effect';
}
