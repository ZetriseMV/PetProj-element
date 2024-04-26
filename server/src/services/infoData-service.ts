import NavigationSchema from '../models/groupNavigation'
import { INavigation }  from '../models/groupNavigation'
import { IcategProducts } from '../Types/infoTypes'
import ProductsSchema from '../models/categoriesProducts'
import { IProductsObject,IProductsOnMainPage } from '../Types/infoTypes'

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
            const productData:IcategProducts[] = await ProductsSchema.find({category:filter})
            return productData
        } catch (error) {
            console.log(error)
            return null
        }
    }
    
    public static getProductsOnMainPage = async (): Promise<IProductsOnMainPage | null> => {
        try {
            const categories:string[] = ['smartphones', 'vacuum', 'tv', 'WashMachine', 'HeadPhones', 'Fridge', 'Bake'];
            const productsData: IProductsOnMainPage = {
                heats: {},
                newItems: {}
            };
    
            for (const category of categories) {
                const productsHeats: IcategProducts[] = await ProductsSchema.find({ category, heat: true });
                const productsNewItems: IcategProducts[] = await ProductsSchema.find({ category, new: true });
    
                productsData.heats[category.toLowerCase()] = productsHeats;
                productsData.newItems[category.toLowerCase()] = productsNewItems;
            }
    
            return productsData;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default DataService