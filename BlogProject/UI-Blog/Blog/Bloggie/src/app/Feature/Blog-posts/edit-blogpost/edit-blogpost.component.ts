import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { category } from '../../Category/Model/category.model';
import { CategoryService } from '../../Category/service/category.service';
import { BlogPost } from '../model/blogpost.model';
import { UpdateBlogPost } from '../model/update-blogpost.model';
import { BlogpostService } from '../service/blogpost.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit,OnDestroy{
  id:string | null = null;
  model?:BlogPost;
  categories$?:Observable<category[]>;
  selectedCategory?:string[];
  routesubscription?:Subscription;
    constructor(private route:ActivatedRoute,private blogService:BlogpostService,private categoryService :CategoryService
      ,private router:Router) { }
  
    ngOnInit(): void {
       
       this.routesubscription=this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        //get the blogpost by id
        if(this.id)
        {
          this.blogService.getBlogPostById(this.id).subscribe(res=>{
            this.model=res;
            this.selectedCategory=res.categories.map(x=>x.id);
          });
        }
      });
      this.categories$=this.categoryService.getCategory();
  
    }
    onFormSubmit(){
      if(this.model && this.id)
      {
        var updateBlogPost:UpdateBlogPost={
         
          title:this.model.title,
          shortDescription:this.model.shortDescription,
          content:this.model.content,
          featuredImageUrl:this.model.featuredImageUrl,
          uriHandle:this.model.uriHandle,
          publishedDate:this.model.publishedDate,
          author:this.model.author,
          isVisible:this.model.isVisible,
          CategoryIds:this.selectedCategory ?? []
        }
        this.blogService.updateBlogPost(this.id,updateBlogPost).subscribe(res=>{
          this.router.navigateByUrl('/admin/blogposts');
        }
        );
      }
      

    }
    onDelete(){
      if(this.id)
      {
        this.blogService.deleteBlogPost(this.id).subscribe(res=>{
          this.router.navigateByUrl('/admin/blogposts');
        });
      }
    }

    ngOnDestroy(): void {
      this.routesubscription?.unsubscribe();
      
    }

}
