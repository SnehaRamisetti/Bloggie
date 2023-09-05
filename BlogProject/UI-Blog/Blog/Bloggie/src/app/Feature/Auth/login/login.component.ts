import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { loginrequest } from '../model/loginrequest.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //create model for login
  model: loginrequest;
  constructor(private authService: AuthService,private cookieService:CookieService,private router:Router) {
    this.model = {
      email: '',
      password: ''
    }
  }
  //on form submit
  onFormSubmit() {
    //call the login method from auth service
    this.authService.login(this.model).subscribe(res => {
      //set auth cookie
      this.cookieService.set('Authorization',`Bearer ${res.token}` ,undefined, '/',undefined, true,'Strict');
      //set user
      this.authService.setUser( {
        email: res.email,
        roles: res.roles
      });

      //navigate to  home page
      this.router.navigateByUrl('/');

       
    });
  }


}
