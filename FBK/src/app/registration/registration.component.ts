import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  lastName: String;
  firstName: String;
  login: String;
  email: String;
  password: String;

  constructor(
    private reg: RegistrationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      email: this.email,
      password: this.password
    }

    if(!this.reg.checkFirstName(user.firstName)) {
      console.log('Имя не введено');
      return false;
    } else if(!this.reg.checkLastName(user.lastName)) {
      console.log('Фамилия не введена');
      return false;
    } else if(!this.reg.checkLogin(user.login)) {
      console.log('Логин не введен');
      return false;
    } else if(!this.reg.checkEmail(user.email)) {
      console.log('Email не введен');
      return false;
    } else if(!this.reg.checkPassword(user.password)) {
      console.log('Пароль не введен');
      return false;
    }

    this.reg.registerUser(user).subscribe((data: any) => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/registration']);
      } else {
        console.log(data.msg);
        this.router.navigate(['/userProfile']);
      }

    });
  }
}
