import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  user: any;

  constructor() { }

  takeInfo(user) {
    this.user = user;
    // console.log(user, '+++');
  }

  getInfo() {
    return this.user;
  }
}
