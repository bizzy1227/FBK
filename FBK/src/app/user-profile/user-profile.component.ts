import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  name: String;

  constructor( private ups: UserProfileService ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.name = this.user.name;
  }

}

