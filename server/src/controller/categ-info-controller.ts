import {Request, Response,NextFunction} from 'express'
import  DataService  from '../services/infoData-service'
import { INavigation } from '../models/groupNavigation'

class CategoryInfoController{
    public getInfoNavigate = async (req:Request,res:Response,next:NextFunction) => {
        try{
            const dataNavigate:INavigation[] | null = await DataService.getInfoNavigateCategories()
            if(dataNavigate){
                res.status(200).json(dataNavigate)
            }
        }catch(err){
            console.log(err)
            res.status(404).json({
                status:false
            })
        }
    }
}
export default new CategoryInfoController