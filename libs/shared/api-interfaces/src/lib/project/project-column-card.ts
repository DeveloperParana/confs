export interface ProjectColumnCard {
  url: string;
  id: number;
  nodeid: string;
  note: string;
  creator: ProjectColumnCardCreator;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
  columnUrl: string;
  contentUrl: string;
  projectUrl: string;
}

export interface ProjectColumnCardCreator {
  login: string;
  id: number;
  nodeid: string;
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
  received_eventsUrl: string;
  type: string;
  siteAdmin: boolean;
}
