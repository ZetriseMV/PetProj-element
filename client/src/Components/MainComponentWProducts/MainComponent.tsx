import React,{useState,useEffect,FC} from "react";
import classes from './styles/mainCompon.module.css'
import { SliderCenter } from '../Slider/main_slider/slider'
import { SliderCategories } from '../Slider/slider_categories/slider_categories'
import { useDispatch } from "react-redux";
import { axiosData } from '../../store/RequestsApi/requests' 
import { AppDispatch,RootState } from '../../store/store'
import { useSelector } from "react-redux";
import { IProducts } from '../../API/interface_requests' 
import { ProductsSlider } from './Products/productSlider'
import { ShowBrands } from './showbrands/ShowBrands'

export const MainComponent:FC = ():JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const [heatsData,setHeatData] = useState<IProducts>()
    const [newItemsData,setItemsData] = useState<IProducts>() 
    const data = useSelector((state: RootState) => state.apiData)
    
    useEffect(() => {
        if(data.status == 'resolved' && data.data.heats && data.data.newItems){
            setHeatData(data.data.heats);
            setItemsData(data.data.newItems)
        }
    },[data])

     useEffect(() => {
        dispatch(axiosData())
    },[])

    return (
        <div className={classes.mainContainer_content}>
            <div className={classes.main_slider}>
                <SliderCenter/>
            </div>
            <div className={classes.slider_popularCategories}>
                <h2>Популярные категории</h2>
                <SliderCategories/>
            </div>
            <div className={classes.products_main}>
                <div className={classes.heats_products}>
                    <ProductsSlider  nameValue = {'Хиты Продаж'}  arrayNeed = {heatsData} />
                </div>
                <div className={classes.brands_main}>
                    <h2>Брэнды</h2>
                    <ShowBrands/>
                </div>
                <div className={classes.heats_products}>
                    <ProductsSlider  nameValue = {'Новинки'}   arrayNeed = {newItemsData} />
                </div>
            </div>
        </div>
    )
}