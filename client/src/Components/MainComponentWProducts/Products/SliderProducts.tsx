import React,{FC} from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import classes from './styles/list/list_products.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import Slider from "react-slick";
import { OneProduct } from './OneProduct'
import { settingsForSlidersProducts } from '../../Slider/main_slider/slider_helper/settingSlider';
import { usePathName } from '../../../hooks/pathName'

export interface IListProducts {
  filteredData: IProductsApi[] | undefined;
  currentEndSlice:number;
}

export const ListProductsSlider: FC<IListProducts> = ({ filteredData,currentEndSlice }): JSX.Element => {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  const pathName = usePathName();
  
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
      {pathName === 'top-sellers' ? (
        <div className={classes.top_sellers_Products}>
          <div className={classes.text_innerJoin}>
            <h2>Лидеры продаж</h2>
            <p>{filteredData?.length}</p>
          </div>
          <div className={classes.flex_products_leader}>
            {filteredData?.slice(0, currentEndSlice).map((item: IProductsApi) => (
              <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {widthScreen >= 1000 ? (
            <Slider {...settingsForSlidersProducts}>
              {filteredData?.map((item: IProductsApi) => (
                <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
              ))}
            </Slider>
          ) : (
            <>
              {filteredData?.slice(0, currentEndSlice).map((item: IProductsApi) => (
                <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};


      
      {/* {widthScreen >= 1000 && pathName == '/top-sellers' ? (
        <Slider {...settingsForSlidersProducts}>
          {filteredData?.map((item: IProductsApi) => (
            <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
          ))}
        </Slider>
      ) : (
        <>
          {filteredData?.slice(0, currentEndSlice).map((item: IProductsApi) => (
            <OneProduct key={item._id} nameProduct={item.nameProduct} image={item.image} price={item.price} link={item.link} />
          ))}
        </>
      )} */}
