import NavigationSchema from '../models/groupNavigation'
import { INavigation } from '../models/groupNavigation'

class DataService {
    public static async getInfoNavigateCategories() { //categories
        try{
            const infoNavigationData:INavigation[] = await NavigationSchema.find();
            return infoNavigationData
        }catch(err) {
            return null
        }
    }
}

export default DataService