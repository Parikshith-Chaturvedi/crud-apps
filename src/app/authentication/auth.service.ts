import { Subject } from "rxjs";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  // registerUser(authData: AuthData) {
  //   this.user = {
  //     email: authData.email,
  //     userID: Math.round(Math.random() * 10000).toString(),
  //   };
  // }

  login(authData: AuthData) {
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error)
    })
  }

  loginAdmin(authData: AuthData) {
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log(result);
      this.authSuccessfullyAdmin();
    })
    .catch(error => {
      console.log(error)
    })
  }


  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate([""]);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(["/students"]);
  }

  private authSuccessfullyAdmin() {
    this.authChange.next(true);
    this.router.navigate(["/admin"]);
  }
}
