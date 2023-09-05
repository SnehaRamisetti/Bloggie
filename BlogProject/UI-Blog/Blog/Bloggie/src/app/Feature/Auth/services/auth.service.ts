import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginrequest } from '../model/loginrequest.model';
import { loginresponse } from '../model/loginresponse.model';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //create behavior subject using dollar user
  $user=new  BehaviorSubject <user |undefined>(undefined);

  


  constructor(private http:HttpClient,private cookieService:CookieService) { }
  //create method for login
  login(model:loginrequest):Observable<loginresponse>{
    //use environment variable to get the api url
    return this.http.post<loginresponse>(`${environment.apiUrl}/api/auth/login`,
    {
      email:model.email,
      password:model.password
    });
     
  }
  //create setuser method
  setUser(user:user){
    //set the user
    this.$user.next(user);
    localStorage.setItem('user-email',user.email);
    localStorage.setItem('user-roles',user.roles.join(','));
  }
  //create getuser method
  user():Observable<user | undefined> {
    return this.$user.asObservable();
  }
  //create getuser method
  getUser():user | undefined{
     const email=localStorage.getItem('user-email');
      const roles=localStorage.getItem('user-roles');
      if(email && roles){
       const user:user={
          email:email,
          roles: roles.split(',') 

      }
      return user;


    }
    return undefined;
 

  }
  //create logout method
  logout():void{
    //clear local storage
    localStorage.clear();
    //reload the page
    this.cookieService.delete('Authorization','/');
    this.$user.next(undefined);
  }
}
