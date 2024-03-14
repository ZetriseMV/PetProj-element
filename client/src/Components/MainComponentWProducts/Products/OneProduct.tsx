import React,{FC} from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import classes from './styles/one_product/one_product.module.css'
import { ButtonUi } from '../../Ui/button/button'
import { itemsStyles,INavigateItems } from '../../HeadNavigation/btnsMain_navigate/ListCardBtn'

type IOneProduct = {
    nameProduct:string,
    image:string,
    price:string,
    link:string,

}

export const OneProduct:FC<IOneProduct> = ({ nameProduct,image,price,link }):JSX.Element => {
    return (
        <Link to={link} className={classes.link_product_slider}>
            <img src={image} alt="product_image" />
            <h2>{ nameProduct }</h2>
            <h4>{ price }</h4>
            <ButtonUi>В Корзину</ButtonUi>
            <hr />
            <div className={classes.icon_map}>
                {
                    itemsStyles.slice(0,3).map((item:INavigateItems) => (
                        <span className="material-symbols-outlined">{item.icon}</span>
                    ))
                }
            </div>
        </Link>
    )
} 