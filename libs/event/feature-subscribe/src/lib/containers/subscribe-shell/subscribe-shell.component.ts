import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './subscribe-shell.component.html',
  styleUrls: ['./subscribe-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeShellComponent {
  date = new Date('05/11/2022').toLocaleDateString();

  cubes = [
    { color: '/assets/cube-orange.svg', position: 'left-top' },
    { color: '/assets/cube-green.svg', position: 'left-bottom' },
    { color: '/assets/cube-blue.svg', position: 'right-top' },
    { color: '/assets/cube-purple.svg', position: 'right-bottom' },
  ]
}
