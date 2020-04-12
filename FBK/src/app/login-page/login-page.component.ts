import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';
// import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginServiceService]
})
export class LoginPageComponent implements OnInit {

    login: String;
    password: String;

  constructor(
    private log: LoginServiceService,
    private ups: UserProfileService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
  }


  userLoginClick() {
    const user = {
      login: this.login,
      password: this.password
    };

    if(user.password == undefined) {
      console.log('Введите пароль');
      return false;
    }

    this.log.loginUser(user).subscribe((data: any) => {
      if(!data.success) {
        console.log(data.msg);
      } else {
        console.log('Вы успешно авторизовались');
        this.router.navigate(['/userProfile']);
        this.log.storeUser(data.token, data.user);
        this.ups.takeInfo(data.user);
        // console.log(data.user);
      }
    });
  }



}
