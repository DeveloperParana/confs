import {
  Input,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ProjectColumn } from '@confs/shared/api-interfaces';

@Component({
  selector: 'confs-event-feature-header,header[confs-event-feature]',
  templateUrl: './event-feature-header.component.html',
  styleUrls: ['./event-feature-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EventFeatureHeaderComponent {
  @Input() columns: ProjectColumn[] | null = [];

  @Input() date?: Date;
}
