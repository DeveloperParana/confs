import { Component, Input } from '@angular/core';
import { ProjectColumn } from '@confs/shared/api-interfaces';

@Component({
  selector: 'confs-project-columns,ul[confs-project-columns]',
  templateUrl: './project-columns.component.html',
  styleUrls: ['./project-columns.component.scss'],
})
export class ProjectColumnsComponent {
  @Input()
  columns: ProjectColumn[] = [];
}
