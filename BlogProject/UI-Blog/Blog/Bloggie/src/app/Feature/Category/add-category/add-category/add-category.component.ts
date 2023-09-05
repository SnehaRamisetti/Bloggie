import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddCategoryRequest } from '../../Model/add-category-request.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  //add the model and bind the data
  model:AddCategoryRequest;
  constructor( private categoryservice:CategoryService) {
    this.model = {
      name: '',
      uriHandle: ''
    }
    
  }
  


//add the subscription
//  private addcategorysubscription?: Subscription;





  onFormSubmit() {
    //call the service method
    //  this.addcategorysubscription=
    this.categoryservice.addCategory(this.model).subscribe(
      res => {
        console.log("Category Added Successfully");
      },
      err => {
        console.log("Error Occured");
      }
    );
  }
  //add the method to unsubscribe the subscription
  // ngOnDestroy() :void {
  //   this.addcategorysubscription?.unsubscribe();
  // }

}
 

