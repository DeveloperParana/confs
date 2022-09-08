import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectColumn } from '@confs/shared/project/api-interfaces';

@Component({
  selector: 'confs-project-column',
  templateUrl: './project-column.component.html',
  styleUrls: ['./project-column.component.scss'],
})
export class ProjectColumnComponent {
  @Input()
  column?: ProjectColumn;

  @Output()
  loadCards = new EventEmitter<number>();
}
