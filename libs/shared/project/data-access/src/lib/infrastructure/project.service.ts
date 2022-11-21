import {
  GithubProject,
  GithubProjectColumn,
  GithubProjectColumnCard,
} from '@confs/shared/project/domain';
import { ServerService } from '@confs/shared/data-access';

export class ProjectService {
  constructor(private readonly serverService: ServerService) {}

  getProject(projectId: number) {
    const url = `project/${projectId}`;

    return this.serverService.get<GithubProject>(url);
  }

  getProjectColumns(projectId: number) {
    const url = `project/${projectId}/columns`;
    return this.serverService.get<GithubProjectColumn[]>(url);
  }

  getProjectColumn(columnId: number) {
    const url = `project/columns/${columnId}`;

    return this.serverService.get<GithubProjectColumn>(url);
  }

  getProjectColumnCards(columnId: number) {
    const url = `project/columns/${columnId}/cards`;

    return this.serverService.get<GithubProjectColumnCard[]>(url);
  }
}
