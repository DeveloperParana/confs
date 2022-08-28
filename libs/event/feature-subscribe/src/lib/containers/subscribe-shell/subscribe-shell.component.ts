import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './subscribe-shell.component.html',
  styleUrls: ['./subscribe-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeShellComponent {
  date = new Date('11/03/2023').toLocaleDateString();
}
