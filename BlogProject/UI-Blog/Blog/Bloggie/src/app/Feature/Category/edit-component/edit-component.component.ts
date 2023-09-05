import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { category } from '../Model/category.model';
import { UpdateCategoryRequest } from '../Model/update-category-request.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit,OnDestroy {
//declare the id of the category
  id:string | null = null;
  category:category | undefined;
  paramssubscription?: Subscription;
  editCategorySubscription?: Subscription;
  //constructor with route to get the id of the category
  constructor( private route:ActivatedRoute,private categoryService:CategoryService,private router:Router) { }
  ngOnInit(): void {
    //get the id of the category
    this.paramssubscription= this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
       
      if(this.id)
      {
        //get the category by id
        this.categoryService.getCategoryById(this.id).subscribe(res=>{
          this.category=res;
        });
      }
    });
  }
  //form submit method with update category model
  onFormSubmit() :void{
    const updateCategoryRequest:UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      uriHandle: this.category?.uriHandle ?? ''
    };
    if (this.id) {
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      });
    }
    }
    //delete the category
    onDelete():void{
      if (this.id) {
        this.categoryService.deleteCategory(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/categories');
          }
        });
      }
    }

  

  


ngOnDestroy(): void {
  //unsubscribe the subscription
  this.paramssubscription?.unsubscribe();
}
}
