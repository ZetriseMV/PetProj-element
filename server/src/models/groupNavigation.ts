import * as mongoose from "mongoose";

export interface INavigation{
    id:mongoose.Schema.Types.ObjectId,
    link:string,
    imageSrc:string,
    altImage:string,
    textName:string,
    advanceCategories: Record<string, string[]>;
}

const NavigationSchema = new mongoose.Schema<INavigation>({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    link:{
        type:String, 
        required:true
    },
    imageSrc:{
        type:String,
        required:true,
    },
    altImage:{
        type:String,
        required:true
    },
    textName:{
        type:String,
        required:true,
    },
    advanceCategories: {
        type: Object,
        required: true
    }
})
export default mongoose.model<INavigation>('Navigation',NavigationSchema)
