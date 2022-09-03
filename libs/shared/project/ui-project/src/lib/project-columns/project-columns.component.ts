import { Component, Input } from '@angular/core';
import { ProjectColumn } from '@confs/shared/project/domain';

@Component({
  selector: 'confs-project-columns',
  templateUrl: './project-columns.component.html',
  styleUrls: ['./project-columns.component.scss'],
})
export class ProjectColumnsComponent {
  @Input()
  columns: ProjectColumn[] = [];
}
