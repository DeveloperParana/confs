import { Input, Component, HostBinding } from '@angular/core';

import { ProjectColumnCard } from '@confs/shared/project/api-interfaces';

const color = ['orange', 'blue', 'purple', 'green'];

@Component({
  selector: 'confs-project-column-card',
  templateUrl: './project-column-card.component.html',
  styleUrls: ['./project-column-card.component.scss'],
})
export class ProjectColumnCardComponent {
  @Input() card?: ProjectColumnCard;

  @Input()
  @HostBinding('attr.class')
  color?: string = color[parseInt(String(Math.random() * color.length), 10)];
}
