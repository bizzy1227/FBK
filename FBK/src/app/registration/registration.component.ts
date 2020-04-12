import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: String;
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
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }

    if(!this.reg.checkName(user.name)) {
      console.log('Имя не введено');
      return false;
    } else if(!this.reg.checkLogin(user.login)) {
      console.log('Логтн не введен');
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
