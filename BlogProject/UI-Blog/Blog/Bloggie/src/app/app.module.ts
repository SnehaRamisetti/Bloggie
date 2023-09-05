import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Component/navbar/navbar.component';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/Category/add-category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditComponentComponent } from './Feature/Category/edit-component/edit-component.component';
import { BlogpostListComponent } from './Feature/Blog-posts/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './Feature/Blog-posts/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './Feature/Blog-posts/edit-blogpost/edit-blogpost.component';
import { LoginComponent } from './Feature/Auth/login/login.component';
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';
import { HomeComponent } from './Feature/Public/home/home.component';
import { BlogDetailsComponent } from './Feature/Public/blog-details/blog-details.component';
import { MarkdownModule } from 'ngx-markdown';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditComponentComponent,
    BlogpostListComponent,
    AddBlogpostComponent,
    EditBlogpostComponent,
    LoginComponent,
    HomeComponent,
    BlogDetailsComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
     
  ],
  providers: [
    {
      provide:'HTTP_INTERCEPTORS',
      useClass:AuthInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
