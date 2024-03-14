import {Request, Response,NextFunction} from 'express'
import { IcategProducts } from '../Types/infoTypes'
import  DataService  from '../services/infoData-service'
import { IProductsOnMainPage } from '../Types/infoTypes'

class ProductCategoriesController{
    public getProductsWfilter = async (req:Request,res:Response,next:NextFunction) => {
        try{
            const { queryFilter } = req.query;
            const products:IcategProducts[] | null = await DataService.getInfoProductsWfilter(queryFilter as string)
            res.status(200).json(products)
        }catch(err){ 
            console.log(err)
            res.status(404).json({
                err,
                status:false
            }) 
        }
    }
    public getObjectMainPage = async (req:Request,res:Response,next:NextFunction) => {
        try{
            const objectProductsMainPage:IProductsOnMainPage | null = await DataService.getProductsOnMainPage();
            if(objectProductsMainPage) {
                res.json(objectProductsMainPage)
            }
        }catch(err) {
            console.log(err)
            res.status(404).json({
                err,
                status:false
            })
        }
    } 
}

export default new ProductCategoriesController