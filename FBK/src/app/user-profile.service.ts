import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  user: any;

  constructor(private http: HttpClient) { }

  takeInfo(user) {
    this.user = user;
    // console.log(user, '+++');
  }

  getInfo() {
    return this.user;
  }

  saveChangeUser(user){
    // позволяет отправить заголовки
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/userProfile/userEdit',
      user,
      {headers: headers})
  }
}
