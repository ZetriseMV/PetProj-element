import React,{FC} from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import classes from './styles/list/list_products.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import Slider from "react-slick";
import { OneProduct } from './OneProduct'
import { settingsForSlidersProducts } from '../../Slider/main_slider/slider_helper/settingSlider';

export interface IListProducts {
  filteredData: IProductsApi[] | undefined;
}

export const ListProductsSlider: FC<IListProducts> = ({ filteredData }): JSX.Element => {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={classes.list_products_main}>
      {widthScreen >= 1000 ? (
        <Slider {...settingsForSlidersProducts}>
          {filteredData?.map((item: IProductsApi) => (
            <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
          ))}
        </Slider>
      ) : (
        <>
          {filteredData?.slice(0, 6).map((item: IProductsApi) => (
            <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
          ))}
        </>
      )}
    </div>
  );
};
