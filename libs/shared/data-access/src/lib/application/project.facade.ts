import {map} from 'rxjs';

import {
  Project,
  ProjectColumn,
  ProjectColumnCard,
} from '@confs/shared/api-interfaces';
import {StateStore} from '../+store/state.store';

import {ProjectService} from '../infrastructure/project.service';
import {ProjectMapper} from '../mapper/project.mapper';

interface ProjectState {
  loading: boolean;
  message: string | null;
  project: Project | null;
  column: ProjectColumn | null;
  columns: ProjectColumn[];
  cards: ProjectColumnCard[];
}

export class ProjectFacade extends StateStore<ProjectState> {
  loading$ = this.select((state) => state.loading);
  message$ = this.select((state) => state.message);
  project$ = this.select((state) => state.project);
  columns$ = this.select((state) => state.columns);
  column$ = this.select((state) => state.column);
  cards$ = this.select((state) => state.cards);

  constructor(private projectService: ProjectService) {
    super({
      loading: false,
      message: null,
      project: null,
      column: null,
      columns: [],
      cards: [],
    });
  }

  loadProject(projectId: number) {
    this.setState({loading: true});

    const project$ = this.projectService
      .getProject(projectId)
      .pipe(map(ProjectMapper.normalizeProject));

    const $project = project$.subscribe((project) => {
      this.setState({loading: false, project});

      $project.unsubscribe();
    });
  }

  loadProjectColumns(projectId: number) {
    this.setState({loading: true});

    const project$ = this.projectService
      .getProjectColumns(projectId)
      .pipe(map(ProjectMapper.normalizeColumns));

    const $project = project$.subscribe((columns) => {
      this.setState({loading: false, columns});

      $project.unsubscribe();
    });
  }

  loadProjectColumn(columnId: number) {
    this.setState({loading: true});

    const column$ = this.projectService
      .getProjectColumn(columnId)
      .pipe(map(ProjectMapper.normalizeColumn));

    const $column = column$.subscribe((column) => {
      this.setState({loading: false, column});

      $column.unsubscribe();
    });
  }

  loadProjectColumnCards(columnId: number) {
    this.setState({loading: true});

    const cards$ = this.projectService
      .getProjectColumnCards(columnId)
      .pipe(map(ProjectMapper.normalizeCards));

    const $cards = cards$.subscribe((cards) => {
      this.setState({loading: false, cards});

      $cards.unsubscribe();
    });
  }
}
