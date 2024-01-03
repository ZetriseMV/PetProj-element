import NavigationSchema from '../models/groupNavigation'
import { INavigation }  from '../models/groupNavigation'
import { IcategProducts } from '../models/categoriesProducts'
import ProductsSchema from '../models/categoriesProducts'

class DataService {
    public static async getInfoNavigateCategories() { //categories
        try{
            const infoNavigationData:INavigation[] = await NavigationSchema.find();
            return infoNavigationData
        }catch(err) {
            return null
        }
    }
    public static getInfoProductsWfilter = async (filter:string) => {
        try {
            const productData:IcategProducts[] = await ProductsSchema.find({ category:filter })
            return productData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default DataService