import {maxChars, normalizeKeys} from '@confs/shared/util-format';
import {GithubUser, User} from '@confs/auth/api-interfaces';

export class UserMapper {
  static normalizeUser(githubUser: GithubUser): User {
    const normalizedUser = normalizeKeys<GithubUser, User>(githubUser);
    const user = maxChars(normalizedUser.login, 12);
    return {...normalizedUser, user};
  }
}
