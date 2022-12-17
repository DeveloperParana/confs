import { Meta, Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { forkJoin, EMPTY, map } from 'rxjs';
import {
  Resolve,
  TitleStrategy,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ProjectColumn } from '@confs/shared/api-interfaces';
import { ProjectMapper, ProjectService } from '@confs/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class EventFeaturePageResolver
  extends TitleStrategy
  implements Resolve<ProjectColumn | never>
{
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly projectService: ProjectService
  ) {
    super();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { column } = route.params;

    if (column) {
      const column$ = this.projectService
        .getProjectColumn(column)
        .pipe(map(ProjectMapper.normalizeColumn));

      const cards$ = this.projectService
        .getProjectColumnCards(column)
        .pipe(map(ProjectMapper.normalizeCards));

      return forkJoin([column$, cards$]).pipe(
        map(([column, cards]) => ({ ...column, cards })),
        map((column) => this.handlePage(state)(column))
      );
    }

    return EMPTY;
  }

  handlePage(state: RouterStateSnapshot) {
    return (column: ProjectColumn) => {
      this.updateTitle(state)(column);
      return column;
    };
  }

  override updateTitle(state: RouterStateSnapshot) {
    return (column: ProjectColumn) => {
      const title = this.buildTitle(state) ?? 'DevPR Conf 2023';
      this.title.setTitle(`${column ? column.name : ''} - ${title}`);
      this.updateCanonical();
    };
  }

  updateCanonical() {
    let link = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (link) {
      link.href = location.toString();
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
      link.href = location.toString();
    }

    console.log(location.toString());
  }
}
