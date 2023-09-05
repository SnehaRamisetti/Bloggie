//export the blogpost interface
export interface UpdateBlogPost {
     
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


