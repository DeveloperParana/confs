import { marked } from 'marked';
import { forkJoin, map } from 'rxjs';

import { normalizeKeys } from '@confs/shared/util-format';
import { StateStore } from '@confs/shared/data-access';
import { ProjectService } from '@confs/shared/project/data-access';
import {
  Project,
  GithubProject,
  ProjectConfig,
  ProjectColumnCard,
  GithubProjectColumnCard,
} from '@confs/shared/project/api-interfaces';

interface EventState {
  loading: boolean;
  speakers: {
    project: Project | null;
    cards: ProjectColumnCard[];
  };
  sponsors: {
    project: Project | null;
    cards: ProjectColumnCard[];
  };
}

export class EventFacade extends StateStore<EventState> {
  loading$ = this.select((state) => state.loading);

  speakers$ = this.select((state) => state.speakers);
  sponsors$ = this.select((state) => state.sponsors);

  constructor(readonly projectService: ProjectService) {
    super({
      loading: false,
      speakers: {
        project: null,
        cards: [],
      },
      sponsors: {
        project: null,
        cards: [],
      },
    });
  }

  loadProject(
    { projectId, columnId }: ProjectConfig,
    key: 'speakers' | 'sponsors'
  ) {
    this.setState({ loading: true });

    const project$ = this.projectService
      .getProject(projectId)
      .pipe(map<GithubProject, Project>(normalizeKeys));

    const cards$ = this.projectService
      .getProjectColumnCards(columnId)
      .pipe(
        map<GithubProjectColumnCard[], ProjectColumnCard[]>((cards) =>
          cards
            .map((card) => ({ ...card, note: marked(card.note) }))
            .map((card) => normalizeKeys(card))
        )
      );

    const $sub = forkJoin([project$, cards$]).subscribe(([project, cards]) => {
      this.setState({ loading: false, [key]: { project, cards } });
      $sub.unsubscribe();
    });
  }
}
