import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../Blog-posts/model/blogpost.model';
import { BlogpostService } from '../../Blog-posts/service/blogpost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //add variable to store blogposts of type observable
  blog$?:Observable<BlogPost[]>;
    //ADD CONSTRUCTOR
  constructor(private blogService:BlogpostService) { }

  ngOnInit(): void {
    //get all blogposts
    
    this.blog$=this.blogService.getBlogPosts();


  }


}
