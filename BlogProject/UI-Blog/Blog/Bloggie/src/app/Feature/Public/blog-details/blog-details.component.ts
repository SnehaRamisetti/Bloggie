import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../../Blog-posts/model/blogpost.model';
import { BlogpostService } from '../../Blog-posts/service/blogpost.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit{
  
  url :string | null =null;
  blogpost$?:Observable<BlogPost>;
    constructor( private route:ActivatedRoute ,private blogpostService:BlogpostService) { }
  
    ngOnInit(): void {
      //get the url parameter
      this.route.paramMap.subscribe(params=>{
        this.url=params.get('url');
      })
      //get the blogpost by url
      if(this.url)
      {
        this.blogpost$=this.blogpostService.getBlogPostByUrl(this.url);
      }
    }
}
