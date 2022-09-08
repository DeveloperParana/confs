import { maxChars, normalizeKeys } from '@confs/shared/util-format';
import { GithubUser } from '@confs/auth/api-interfaces';

import { TicketUser } from '../entities';

export function mapToTicketUser(githubUser: GithubUser): TicketUser {
  const ticketUser = normalizeKeys<GithubUser, TicketUser>(githubUser);

  const user = maxChars(ticketUser.login, 12);

  return { ...ticketUser, user };
}
