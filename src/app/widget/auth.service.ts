import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn;
  public username;
  _url='';
  constructor(private myRoute:Router,private _http:HttpClient) {
    this.isUserLoggedIn=false;
   }
   setUserLoggedIn(){
     this.isUserLoggedIn=true;
     this.username='admin';
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }

//   sendToken(token: string) {
//     localStorage.setItem("LoggedInUser", token)
//   }
//   getToken() {
//     return localStorage.getItem("LoggedInUser")
//   }
//   isLoggednIn() {
//     return this.getToken() !== null;
//   }
//   logout() {
//     localStorage.removeItem("LoggedInUser");
//     this.myRoute.navigate(["login"]);
//   }
   enroll(login:Login){
    return this._http.post<any>(this._url,login);
   }
}
