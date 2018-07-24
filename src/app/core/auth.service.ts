import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: any = null;
  userRef: AngularFireObject<any>;

  get authenticated() {
    return this.authState !== null;
  }


  get currentUser() {
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable() {
    return this.afAuth.authState;
  }


  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }


  get currentUserName(): string {
    if (!this.authState) {
      return 'Stbui';
    } else {
      return this.authState['displayName'] || '佚名';
    }
  }


  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.anonymous : false;
  }

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  githubLogin() {
    const provide = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provide).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously().then((user) => {
      this.authState = user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.authState = user;
      this.updateUserData();
    });
  }


  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.authState = user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email).then(() => {
      console.log('resetPassword');
    }).catch(error => console.log('resetPassword', error));
  }


  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.authState = null;
    }).catch(error => console.log(error));
  }

  private updateUserData() {
    const path = `users/${this.currentUserId}`;
    this.userRef = this.db.object(path);
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };

    this.userRef.update(data).catch(error => console.log('update：', error));
  }

}
