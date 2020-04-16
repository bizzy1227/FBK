import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  token: any;
  user: any;

  constructor(private http: HttpClient) { }

  checkLogin(login) {
    if(login == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkPassword(password) {
    if(password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  loginUser(user) {
    // позволяет отправить заголовки
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/login',
      user,
      {headers: headers})
  }

  storeUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  storeUpdateUser(user) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return tokenNotExpired();
  }
}
