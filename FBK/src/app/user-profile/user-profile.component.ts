import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  lastName: String;
  firstName: String;
  email: String;
  photo: String;
  aboutMe: String;
  favorit: Array<object>;
  subscriptions: Array<String>;
  joined: String;
  city: String;
  posts: Array<String>;
  site: String;

  constructor(
    private ups: UserProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.lastName = this.user.lastName;
    this.firstName = this.user.firstName;
    this.email = this.user.email;
    this.photo = this.user.photo;
    this.aboutMe = this.user.aboutMe;
    this.favorit = this.user.favorit;
    this.subscriptions = this.user.subscriptions;
    this.joined = this.user.joined.slice(0, 10);
    this.city = this.user.city;
    this.posts = this.user.posts;
    this.site = this.user.site;
  }



  moveToEdit() {
    this.router.navigate(['/userProfile/userEdit']);
  }
}

