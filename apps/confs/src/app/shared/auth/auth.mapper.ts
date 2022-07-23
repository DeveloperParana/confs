import { UserInfo } from '@angular/fire/auth';
import { GithubOAuthResponse, GithubUserConf } from './auth.interface';

export class AuthMapper {
  private props: string[] = [
    'login',
    'id',
    'avatar_url',
    'html_url',
    'name',
    'company',
    'blog',
    'location',
    'bio',
    'twitter_username',
    'public_repos',
    'public_gists',
    'followers',
  ];

  mapTo<T extends GithubOAuthResponse>(user: T): GithubUserConf {
    const data: Record<string, string> = {};
    console.log(user);

    Object.entries(user).forEach(([key, value]: [string, string]) => {
      if (this.props.includes(key)) {
        data[key] = value;
      }
    });

    return data as unknown as GithubUserConf;
  }

  mapFrom(fireUsers: (UserInfo | null)[]): UserInfo {
    return fireUsers.find(
      (fu) => fu !== null && fu.providerId === 'github.com'
    ) as UserInfo;
  }
}
