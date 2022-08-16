import { Http } from '@confs/shared/data-access';

export class GithubApiService extends Http {
  findUserById(id: string) {
    return this.get(`https://api.github.com/users/${id}`);
  }

  findUserByLogin(login: string) {
    return this.get(`https://api.github.com/user/${login}`);
  }
}
