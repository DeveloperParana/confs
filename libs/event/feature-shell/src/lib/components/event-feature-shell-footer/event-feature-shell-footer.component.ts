import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'confs-event-feature-shell-footer,footer[confs-event-feature-shell]',
  templateUrl: './event-feature-shell-footer.component.html',
  styleUrls: ['./event-feature-shell-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellFooterComponent {
  @Input() date?: string;
}
