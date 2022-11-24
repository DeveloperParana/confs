import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'confs-event-feature-footer,footer[confs-event-feature]',
  templateUrl: './event-feature-footer.component.html',
  styleUrls: ['./event-feature-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureFooterComponent {
  @Input() year?: string;
}
