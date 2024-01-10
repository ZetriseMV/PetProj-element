import {Request, Response,NextFunction} from 'express'
import { IcategProducts } from '../models/categoriesProducts'
import  DataService  from '../services/infoData-service'

class ProductCategoriesController{
    public getProductsWfilter = async (req:Request,res:Response,next:NextFunction) => {
        try{
            const { queryFilter } = req.query;
            const products:IcategProducts[] | null = await DataService.getInfoProductsWfilter(queryFilter as string)
            res.status(200).json(products)
        }catch(err){ 
            console.log(err)
            res.status(404).json({
                status:false
            }) 
        }
    }
}

export default new ProductCategoriesController