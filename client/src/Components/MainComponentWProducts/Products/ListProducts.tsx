import React,{FC} from 'react'
import {Link} from 'react-router-dom'
import classes from './styles/list/list_products.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import Slider from "react-slick";
import { OneProduct } from './OneProduct'
import { settingsForSlidersProducts } from '../../Slider/main_slider/slider_helper/settingSlider';

interface IListProducts {
    filteredData:IProductsApi[] | undefined;
}

export const ListProducts:FC<IListProducts> = ({ filteredData }):JSX.Element => {

    return (
        <div className={classes.list_products_main}>
            <Slider {...settingsForSlidersProducts}>
                {
                    filteredData?.map((item:IProductsApi) => (
                        <OneProduct 
                            key={item._id}
                            nameProduct={item.nameProduct}
                            image = {item.image}
                            price={item.price}
                            link={item.link}
                        />
                    ))
                }  
            </Slider>
        </div>
    )
} 