import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable()
export class AuthService {
  constructor(readonly auth: AngularFireAuth) {}

  signInGithub() {
    this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    this.auth.signOut();
  }

  private signIn(provider: firebase.auth.AuthProvider) {
    this.auth.signInWithPopup(provider);
  }
}
