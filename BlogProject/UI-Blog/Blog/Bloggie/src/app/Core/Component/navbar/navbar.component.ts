import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Feature/Auth/model/user.model';
import { AuthService } from 'src/app/Feature/Auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user?:user;
  constructor(private authservice : AuthService,private router:Router) { }
  ngOnInit(): void {
    this.authservice.user().subscribe(res=>{
      this.user=res;
    }
    );
    this.user=this.authservice.getUser();
     
  


    
  }
  //logout method
  logout():void{
    this.authservice.logout();
    this.router.navigateByUrl('/');
  }

}
