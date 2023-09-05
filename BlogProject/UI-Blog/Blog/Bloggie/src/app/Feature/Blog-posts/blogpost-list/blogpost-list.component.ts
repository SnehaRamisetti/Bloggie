import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../model/blogpost.model';
import { BlogpostService } from '../service/blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogpost?: BlogPost[];
    constructor(private Blogpostservice:BlogpostService) { }
  
    ngOnInit(): void {
      this.Blogpostservice.getBlogPosts().subscribe(
        res => {
          this.blogpost = res;
        },
        err => {
          console.log("Error Occured");
        }
      );
    }

}
