import { Component, Input } from '@angular/core';
import { ProjectColumnCard } from '@confs/shared/project/domain';

@Component({
  selector: 'confs-project-column-card',
  templateUrl: './project-column-card.component.html',
  styleUrls: ['./project-column-card.component.scss'],
})
export class ProjectColumnCardComponent {
  @Input() card?: ProjectColumnCard;
}
