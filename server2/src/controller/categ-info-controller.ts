import {Request, Response,NextFunction} from 'express'

interface infoProduct{
    categoryName:string;
    pullRequest:boolean;
}

class CategoryInfoController{
    public getInfo = (req:Request,res:Response,next:NextFunction) => {
        try{
            const obj:infoProduct = {
                categoryName:'Something',
                pullRequest:true
            }  
            res.send(obj)
        }catch(err){
            console.log(err)
            res.status(404).json({
                status:false
            })
        }
    }
}
export default new CategoryInfoController