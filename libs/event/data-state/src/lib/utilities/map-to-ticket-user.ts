import { GithubUser, TicketUser } from '@confs/auth/api-interfaces';
import { maxChars, normalizeKeys } from '@confs/shared/util-format';

export function mapToTicketUser(githubUser: GithubUser): TicketUser {
  const ticketUser = normalizeKeys<GithubUser, TicketUser>(githubUser);

  const login = maxChars(ticketUser.login, 12);

  return { ...ticketUser, login };
}
