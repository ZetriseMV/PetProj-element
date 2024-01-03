import * as mongoose from "mongoose";

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
    nameProduct:string,
    price:string,
    category:string,
    __v:number,
}

const ProductsSchema = new mongoose.Schema<IcategProducts>({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    firsLine:{
        type:String,
        required:true,
    },
    secondLine:{
        type:String,
        required:true,
    },
    thirdLine:{
        type:String,
        required:true,
    },
    fourthLine:{
        type:String,
        required:true,
    },
    fifthLine:{
        type:String,
        required:true,
    },
    sixthLine:{
        type:String,
        required:true,
    },
    seventhLine:{
        type:String,
        required:true,
    },
    eighthLine:{
        type:String,
        required:true,
    },
    ninethLine:{
        type:String,
        required:false,
    },
    tenthLine:{
        type:String,
        required:false,
    },
    eleventhLine:{
        type:String,
        required:false,
    },
    nameProduct:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    __v:{
        type:Number,
        required:true,
    }
})

export default mongoose.model<IcategProducts>('categoriesProducts',ProductsSchema)