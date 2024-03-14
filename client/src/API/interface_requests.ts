
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
    heat?:boolean,
    new?:boolean, 
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

export interface IProductsHeatsAndNews{
    heats: Record<string, IProductsApi[]>;
    newItems: Record<string, IProductsApi[]>;
}

export interface IProducts {
    smartphones:IProductsApi[];
    vacuum:IProductsApi[];
    tv:IProductsApi[];
    WashMachine:IProductsApi[];
    HeadPhones:IProductsApi[];
    Fridge:IProductsApi[];
    Bake:IProductsApi[];
}

export interface ApiDataState {
    data: IProductsHeatsAndNews[];
    status: string | null;
    error: string | null;
}

export {}