import { Component, OnInit } from '@angular/core';
import { category } from '../Model/category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements   OnInit{
  categories?: category[];
  //add constructor and call the service method
  constructor( private categoryService : CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log("Error Occured");
      }
    );
  }


}
