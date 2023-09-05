import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { category } from '../../Category/Model/category.model';
import { CategoryService } from '../../Category/service/category.service';
import { AddBlogPost } from '../model/add-blogpost.model';
import { BlogpostService } from '../service/blogpost.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {
  model:AddBlogPost;
  categories$:Observable<category[]>|undefined;
  constructor(private blogpostService: BlogpostService,private router:Router,private categoryService:CategoryService) {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      featuredImageUrl: '',
      uriHandle: '',
      publishedDate: new Date(),
      author: '',
      isVisible: true,
      CategoryIds:[]
       
     

}
 }
 ngOnInit(): void {
   this.categories$ = this.categoryService.getCategory();
 }
 //this method will be called when the form is submitted
  onFormSubmit() {
    console.log(this.model);
    this.blogpostService.addBlogPost(this.model).subscribe(() => {
      this.router.navigateByUrl('/admin/blogposts');
    });
  }

}
