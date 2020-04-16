import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';

import { FormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { LoginServiceService } from './login-service.service';
import { UserProfileService } from './user-profile.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IsLoggedIn } from './isLogged.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userProfile', component: UserProfileComponent, canActivate: [IsLoggedIn] },
  { path: 'userProfile/userEdit', component: UserEditComponent, canActivate: [IsLoggedIn] },
  { path: 'registration',      component: RegistrationComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserProfileComponent,
    NotFoundComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [
    RegistrationService,
    LoginServiceService,
    UserProfileService,
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
