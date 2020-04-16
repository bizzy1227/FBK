import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private ups: UserProfileService,
    private router: Router,
    private log: LoginServiceService
  ) { }

  user: any;
  firstName: String;
  lastName: String;
  email: String;
  id: String;
  photo: String;
  aboutMe: String;
  favorit: Array<object>;
  subscriptions: Array<String>;
  joined: String;
  city: String;
  posts: Array<String>;
  site: String;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.id = this.user.id;
    this.photo = this.user.photo;
    this.aboutMe = this.user.aboutMe;
    this.favorit = this.user.favorit;
    this.subscriptions = this.user.subscriptions;
    this.city = this.user.city;
    this.posts = this.user.posts;
    this.site = this.user.site;
    this.joined = this.user.joined.slice(0, 10);
  }

  saveUserEditClick() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      id: this.id,
      photo: this.photo,
      aboutMe: this.aboutMe,
      favorit: this.favorit,
      subscriptions: this.subscriptions,
      city: this.city,
      posts: this.posts,
      site: this.site,
    }
    this.ups.saveChangeUser(user).subscribe((data: any) => {

         console.log('Изменения успешно сохранены');
         console.log(data.user);
         this.log.storeUpdateUser(data.user);
         this.router.navigate(['/userProfile']);
         // this.ups.takeInfo(data.user);
         // console.log(data.user);
    });
  }

}
