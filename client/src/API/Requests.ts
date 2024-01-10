import axios,{ AxiosResponse } from 'axios'
import { API_ROUTE } from './api'
import { IProductsApi } from './interface_requests'
import  ICategoriesContent  from './interface_requests'

class RequestsServer{

    static async getCategoryWithFilter(
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        QUERY_FILTER:string,
        setElementsCategoryArray: (data: IProductsApi[]) => void
    ){
        setLoading(true);
        try {
            axios.get<IProductsApi[]>(`${API_ROUTE}/getCategoryElelements`,{
                params: {
                    queryFilter: QUERY_FILTER
                }
            })
            .then((response:AxiosResponse<IProductsApi[]>) => setElementsCategoryArray(response.data))
            .catch((error) => console.log(error))
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    static async getElementsCatgeory(setNavigateCategoriesData: (data: ICategoriesContent[]) => void){
        try{
            axios
                .get<ICategoriesContent[]>(`${API_ROUTE}/infonavigate`)
                .then((response:AxiosResponse<ICategoriesContent[]>) => setNavigateCategoriesData(response.data))
                .catch((err) => console.log(err))
        }catch(error) {
            console.error(error)
        }
    }
    
}
export default RequestsServer