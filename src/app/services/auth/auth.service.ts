import { IUser } from './../../models/IUser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: IUser) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: IUser) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afa.signOut();
  }

  getAuth() {
    return this.afa;
  }

}
