import { ProjectColumn } from './project-column';

export interface Project {
  ownerUrl: string;
  url: string;
  htmlUrl: string;
  columnsUrl: string;
  id: number;
  nodeId: string;
  name: string;
  body: string;
  number: number;
  state: string;
  creator: ProjectCreator;
  createdAt: string;
  updatedAt: string;
  organizationPermission: string;
  private: boolean;
  columns?: ProjectColumn[];
}

export interface ProjectCreator {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
}
