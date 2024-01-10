export interface IProductsApi {
    _id:number,
    firsLine:string,
    secondLine:string,
    thirdLine:string,
    fourthLine:string,
    fifthLine:string,
    sixthLine:string,
    seventhLine:string,
    eighthLine:string,
    ninethLine?:string,
    tenthLine?:string,
    eleventhLine?:string,
    price:string,
    nameProduct:string,
    category:string,
    link:string,
    image:string,
    __v:number;
}

export default interface ICategoriesContent {
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

export {}