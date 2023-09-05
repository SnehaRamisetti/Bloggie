import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Feature/Auth/login/login.component';
import { AddBlogpostComponent } from './Feature/Blog-posts/add-blogpost/add-blogpost.component';
import { BlogpostListComponent } from './Feature/Blog-posts/blogpost-list/blogpost-list.component';
import { EditBlogpostComponent } from './Feature/Blog-posts/edit-blogpost/edit-blogpost.component';
import { AddCategoryComponent } from './Feature/Category/add-category/add-category/add-category.component';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { EditComponentComponent } from './Feature/Category/edit-component/edit-component.component';
import { BlogDetailsComponent } from './Feature/Public/blog-details/blog-details.component';
import { HomeComponent } from './Feature/Public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'blog/:url',
    component: BlogDetailsComponent
  },
   //add path to the component
  { 
    path: 'admin/categories', 
    component: CategoryListComponent
   },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'admin/categories/edit/:id',
    component: EditComponentComponent
  },
  {
    path: 'admin/blogposts',
    component:BlogpostListComponent
  },
  {
    path: 'admin/blogposts/add',
    component:AddBlogpostComponent
  },
  {
    path: 'admin/blogposts/edit/:id',
    component:EditBlogpostComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },

  

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
