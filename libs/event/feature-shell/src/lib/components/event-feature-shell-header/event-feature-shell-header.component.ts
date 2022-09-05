import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProjectColumn } from '@confs/shared/project/domain';

@Component({
  selector:
    'confs-event-feature-shell-header,header[confs-event-feature-shell]',
  templateUrl: './event-feature-shell-header.component.html',
  styleUrls: ['./event-feature-shell-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureShellHeaderComponent {
  @Input() columns: ProjectColumn[] | null = [];

  @Input() date?: string;
}
