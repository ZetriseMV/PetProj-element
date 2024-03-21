import { FC,useState,useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { AppDispatch,RootState } from '../../../../store/store'
import { IProductsApi } from '../../../../API/interface_requests';
import { ListProductsSlider } from '../../../MainComponentWProducts/Products/SliderProducts';

export const LeaderProducts:FC = ():JSX.Element => {
    const [leaderProductsArray,setLeaderProductsArray] = useState<IProductsApi[]>()
    const data = useSelector((state: RootState) => state.apiData)
    console.log(data.data.heats)

    useEffect(() => {  
        const allProducts: IProductsApi[][] = Object.values(data.data.heats);
    
        const selectedProducts: IProductsApi[] = [];
     
        allProducts.forEach((productArray: IProductsApi[] | any) => { 
            if (Array.isArray(productArray)) {
                const selectedProductsFromArray = productArray.slice(0, 2); 
                selectedProducts.push(...selectedProductsFromArray); 
            }
        }); 
     
        setLeaderProductsArray(selectedProducts); 
    }, [data.data]);
    
    return (
        <>
            {
                leaderProductsArray &&
                    <ListProductsSlider 
                        filteredData = {leaderProductsArray}
                        currentEndSlice = {leaderProductsArray.length}
                    />
            }
        </>
    )
}