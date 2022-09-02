import { Component, Input, OnInit } from '@angular/core';

import { ProjectFacade } from '@confs/shared/project/data-access';

@Component({
  selector: 'confs-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input()
  projectId = 0;

  constructor(readonly projectFacade: ProjectFacade) {}

  ngOnInit() {
    if (this.projectId) {
      this.projectFacade.loadProject(this.projectId);
      this.projectFacade.loadProjectColumns(this.projectId);
    }
  }
}
