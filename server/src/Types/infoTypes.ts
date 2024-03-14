import mongoose from "mongoose";

export interface IcategProducts {
    id:mongoose.Schema.Types.ObjectId,
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
    twelfthLine?:string,
    nameProduct:string,
    heat?:boolean,
    new?:boolean, 
    price:string,
    category:string,
    link:string,
    image:string,
    __v:number,
}

export interface IProductsObject {
    smartphones:IcategProducts[];
    vacuum:IcategProducts[];
    tv:IcategProducts[];
    WashMachine:IcategProducts[];
    HeadPhones:IcategProducts[];
    Fridge:IcategProducts[];
    Bake:IcategProducts[];
}
export interface IProductsOnMainPage {
    heats: Record<string, IcategProducts[]>;
    newItems: Record<string, IcategProducts[]>;
}