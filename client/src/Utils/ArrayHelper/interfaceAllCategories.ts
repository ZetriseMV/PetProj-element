
export interface ICategoriesContent {
    _id:number;
    link:string;
    imageSrc:string;
    altImage:string;
    textName:string;
    advanceCategories: {
        Sells: string[];
        SellsLinks: string[];
    };
}
