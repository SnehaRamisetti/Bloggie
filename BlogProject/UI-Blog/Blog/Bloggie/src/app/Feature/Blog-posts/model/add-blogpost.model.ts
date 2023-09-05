//export the inteface
export interface AddBlogPost {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    uriHandle: string;
    publishedDate: Date;
    author: string;
    isVisible: boolean;
    //add category of type category
    CategoryIds:string[];

   
}