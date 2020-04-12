import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  // validate part
  checkName(name) {
    if(name == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkLogin(login) {
    if(login == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkEmail(email) {
    if(email == undefined) {
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

  // call in backend part

  registerUser(user) {
    // позволяет отправить заголовки
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/registration',
      user,
      {headers: headers})   // .pipe(map((res: any) => res.json())); // теперь данные HttpClient по умолчанию json
  }

}
