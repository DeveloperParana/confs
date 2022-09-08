import {
  GithubProject,
  GithubProjectColumn,
  GithubProjectColumnCard,
} from '@confs/shared/project/domain';
import { Http } from '@confs/shared/data-access';

export class ProjectService {
  constructor(private readonly http: Http, private readonly url: string) {}

  getProject(projectId: number) {
    const url = `${this.url}/project/${projectId}`;

    return this.http.get<GithubProject>(url);
  }

  getProjectColumns(projectId: number) {
    const url = `${this.url}/project/${projectId}/columns`;

    return this.http.get<GithubProjectColumn[]>(url);
  }

  getProjectColumn(columnId: number) {
    const url = `${this.url}/project/columns/${columnId}`;

    return this.http.get<GithubProjectColumn>(url);
  }

  getProjectColumnCards(columnId: number) {
    const url = `${this.url}/project/columns/${columnId}/cards`;

    return this.http.get<GithubProjectColumnCard[]>(url);
  }

  getProjectColumnCard(cardId: number) {
    const url = `${this.url}/project/columns/cards/${cardId}`;

    return this.http.get<GithubProjectColumnCard>(url);
  }
}
