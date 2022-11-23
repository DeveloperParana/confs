import { ProjectColumnCard } from './project-column-card';

export interface ProjectColumn {
  url: string;
  projectUrl: string;
  cardsUrl: string;
  id: number;
  nodeId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  cards?: ProjectColumnCard[];
}
