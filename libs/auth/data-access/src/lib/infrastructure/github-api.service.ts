import { GithubUser } from '@confs/auth/api-interfaces';
import { Http } from '@confs/shared/data-access';

export class GithubApiService extends Http {
  findUserById(id: string) {
    return this.get<GithubUser>(`https://api.github.com/user/${id}`);
  }

  findUserByLogin(login: string) {
    return this.get<GithubUser>(`https://api.github.com/users/${login}`);
  }
}
