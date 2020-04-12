import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private log: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.log.logout();
    console.log('Вы вышли из учетной записи');
    this.router.navigate(['home']);
    return false;
  }
}
