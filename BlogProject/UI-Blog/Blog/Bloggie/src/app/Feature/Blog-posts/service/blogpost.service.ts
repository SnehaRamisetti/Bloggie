import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../model/add-blogpost.model';
import { BlogPost } from '../model/blogpost.model';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../model/update-blogpost.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http:HttpClient,private cookieService:CookieService) { }
  //add the method to post the data with the type model with observable
  addBlogPost(model:AddBlogPost):Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiUrl}/api/BlogPost`,model,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }
  //add the method to get the data with the type model with observable
  getBlogPosts():Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiUrl}/api/BlogPost`);
  }
  //add the method to get the data with the id type model with observable
  getBlogPostById(id:string):Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiUrl}/api/BlogPost/${id}`);
  }
  //add the method to get the data with the url type model with observable
  getBlogPostByUrl(url:string):Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiUrl}/api/BlogPost/${url}`);
  }
  //add the method to put the data with the id type model with observable
  updateBlogPost(id:string,model:UpdateBlogPost):Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.apiUrl}/api/BlogPost/${id}`,model,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }
  //add the method to delete the data with the id type model with observable
  deleteBlogPost(id:string):Observable<BlogPost> {
    return this.http.delete<BlogPost>(`${environment.apiUrl}/api/BlogPost/${id}`,
    {
      headers:{
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }

  
}
