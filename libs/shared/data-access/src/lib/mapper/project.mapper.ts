import { normalizeKeys } from '@confs/shared/util-format';
import { marked } from 'marked';
import {
  Project,
  ProjectColumn,
  GithubProject,
  ProjectColumnCard,
  GithubProjectColumn,
  GithubProjectColumnCard,
} from '@confs/shared/api-interfaces';

export class ProjectMapper {
  static normalizeCards(cards: GithubProjectColumnCard[]): ProjectColumnCard[] {
    return cards
      .map((card) => ({ ...card, note: marked(card.note) }))
      .map((card) => normalizeKeys(card));
  }

  static normalizeProject(project: GithubProject): Project {
    return normalizeKeys(project);
  }

  static normalizeColumns(columns: GithubProjectColumn[]): ProjectColumn[] {
    return columns.map((column) => normalizeKeys(column));
  }

  static normalizeColumn(column: GithubProjectColumn): ProjectColumn {
    return normalizeKeys(column);
  }
}
