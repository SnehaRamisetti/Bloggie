import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../Model/add-category-request.model';
import { category } from '../Model/category.model';
import { UpdateCategoryRequest } from '../Model/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient,private cookieService:CookieService) { }
 
  //add the method to get the data with the type model with observable
  getCategory() :Observable<category[]>{
    return this.http.get<category[]>(`${environment.apiUrl}/api/Categories`);
  }
  //get the category by id
  getCategoryById(id:string) :Observable<category>{
    return this.http.get<category>(`${environment.apiUrl}/api/Categories/${id}`);
  }
   //add the method to post the data with the type model with observable and pass the token
  
   addCategory(model:AddCategoryRequest) :Observable<void>{
    return this.http.post<void>(`${environment.apiUrl}/api/Categories`,model,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    }

    );
  }
  //add the method to put the data with the type model with observable
  updateCategory(id:string,UpdateCategoryRequest:UpdateCategoryRequest) :Observable<void>{
    return this.http.put<void>(`${environment.apiUrl}/api/Categories/${id}`,UpdateCategoryRequest,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }
  //add the method to delete the data with the type model with observable
  deleteCategory(id:string) :Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/api/Categories/${id}`,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }

   


 
}
