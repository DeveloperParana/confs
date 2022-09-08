import { map } from 'rxjs';
import { marked } from 'marked';

import { normalizeKeys } from '@confs/shared/util-format';
import { StateStore } from '@confs/shared/data-access';
import {
  Project,
  ProjectColumn,
  GithubProject,
  GithubProjectColumn,
  ProjectColumnCard,
  GithubProjectColumnCard,
} from '@confs/shared/api-interfaces';

import { ProjectService } from '../infrastructure/project.service';

interface ProjectState {
  loading: boolean;
  message: string | null;
  project: Project | null;
  column: ProjectColumn | null;
  columns: ProjectColumn[];
  cards: ProjectColumnCard[];
  card: ProjectColumnCard | null;
}

export class ProjectFacade extends StateStore<ProjectState> {
  loading$ = this.select((state) => state.loading);
  message$ = this.select((state) => state.message);
  project$ = this.select((state) => state.project);
  columns$ = this.select((state) => state.columns);
  column$ = this.select((state) => state.column);
  cards$ = this.select((state) => state.cards);
  card$ = this.select((state) => state.card);

  constructor(private projectService: ProjectService) {
    super({
      loading: false,
      message: null,
      project: null,
      column: null,
      columns: [],
      cards: [],
      card: null,
    });
  }

  loadProject(projectId: number) {
    this.setState({ loading: true });

    const project$ = this.projectService
      .getProject(projectId)
      .pipe(map<GithubProject, Project>(normalizeKeys));

    const $project = project$.subscribe((project) => {
      this.setState({ loading: false, project });

      $project.unsubscribe();
    });
  }

  loadProjectColumns(projectId: number) {
    this.setState({ loading: true });

    const project$ = this.projectService
      .getProjectColumns(projectId)
      .pipe(
        map<GithubProjectColumn[], ProjectColumn[]>((columns) =>
          columns.map((column) => normalizeKeys(column))
        )
      );

    const $project = project$.subscribe((columns) => {
      this.setState({ loading: false, columns });

      $project.unsubscribe();
    });
  }

  loadProjectColumn(columnId: number) {
    this.setState({ loading: true });

    const column$ = this.projectService
      .getProjectColumn(columnId)
      .pipe(map<GithubProjectColumn, ProjectColumn>(normalizeKeys));

    const $column = column$.subscribe((column) => {
      this.setState({ loading: false, column });

      $column.unsubscribe();
    });
  }

  loadProjectColumnCards(columnId: number) {
    this.setState({ loading: true });

    const project$ = this.projectService
      .getProjectColumnCards(columnId)
      .pipe(
        map<GithubProjectColumnCard[], ProjectColumnCard[]>((cards) =>
          cards
            .map((card) => ({ ...card, note: marked(card.note) }))
            .map((card) => normalizeKeys(card))
        )
      );

    const $project = project$.subscribe((cards) => {
      this.setState({ loading: false, cards });

      $project.unsubscribe();
    });
  }

  loadProjectColumnCard(cardId: number) {
    this.setState({ loading: true });

    const card$ = this.projectService
      .getProjectColumnCard(cardId)
      .pipe(map<GithubProjectColumnCard, ProjectColumnCard>(normalizeKeys));

    const $card = card$.subscribe((card) => {
      this.setState({ loading: false, card });

      $card.unsubscribe();
    });
  }
}
