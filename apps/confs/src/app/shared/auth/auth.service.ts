import { GithubOAuthResponse, GithubUserConf } from './auth.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { map, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthMapper } from './auth.mapper';

@Injectable()
export class AuthService {
  private _githubUser = new BehaviorSubject<GithubUserConf>({
    login: 'seu-user',
    id: '0000000',
    avatar_url: '',
    html_url: 'https://github.com/seu-user',
    name: 'Seu nome',
    company: '',
    blog: 'https://seu.blog',
    location: 'Cidade, Estado',
    bio: 'Sua bio.\r\n',
    twitter_username: 'seu-twitter',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  });

  readonly githubUser$ = this._githubUser.asObservable();

  private _mapper = new AuthMapper();

  constructor(readonly auth: AngularFireAuth, private http: HttpClient) {}

  loadUser() {
    const auth$ = this.auth.authState;
    const $auth = auth$.subscribe((fireUser) => {
      if (fireUser && fireUser.providerData.length) {
        $auth.unsubscribe();

        const user = this._mapper.mapFrom(fireUser.providerData);
        const user$ = this.findGithubApi(+user.uid);
        const $user = user$.subscribe((user) => {
          $user.unsubscribe();

          this._githubUser.next(user);
        });
      }
    });
  }

  findGithubApi(id: number) {
    return this.http
      .get<GithubOAuthResponse>(`https://api.github.com/user/${id}`)
      .pipe(map((user) => this._mapper.mapTo(user)));
  }

  signInGithub() {
    return this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    this.auth.signOut();
  }

  private signIn(provider: firebase.auth.AuthProvider) {
    this.auth.signInWithPopup(provider);
  }
}
