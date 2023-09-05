//export the interface
import { category } from "src/app/Feature/Category/Model/category.model";
export interface BlogPost {
    id:string;
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    uriHandle: string;
    publishedDate: Date;
    author: string;
    isVisible: boolean;
    //add category of type category
    categories:category[];


}


