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

  mapTo<T extends GithubOAuthResponse>(user: T) {
    const data: Partial<GithubUserConf> = {};
    Object.entries(user).forEach(([key, value]) => {
      if (this.props.includes(key)) {
        data[key as keyof GithubUserConf] = value;
      }
    });
    return data as GithubUserConf;
  }

  mapFrom(fireUsers: (UserInfo | null)[]): UserInfo {
    return fireUsers.find(
      (fu) => !!fu && fu.providerId === 'github.com'
    ) as UserInfo;
  }

  mapToBase64(image: Blob) {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        }
      };
      reader.readAsDataURL(image);
    });
  }
}
