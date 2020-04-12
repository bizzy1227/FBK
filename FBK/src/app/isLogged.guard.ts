import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginServiceService } from './login-service.service'

@Injectable()
export class IsLoggedIn implements CanActivate {
  constructor(private log: LoginServiceService, private router: Router) {}

  canActivate() {
    if(this.log.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
