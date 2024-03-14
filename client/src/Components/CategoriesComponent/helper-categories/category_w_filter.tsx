import React,{ useState,useEffect,FC  } from 'react'
import { Link,NavLink } from 'react-router-dom'
import classes from './styles_product/categoryProducts.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import { ButtonUi } from '../../Ui/button/button'
import { itemsStyles,INavigateItems } from '../../HeadNavigation/btnsMain_navigate/ListCardBtn'
import { categoryData,TCategoryData } from '../helper-categoryType'
import { StarViewUI } from '../../Ui/star_view/starUI'
import { useGetDateNow,useGetDateNext } from '../../../hooks/NowNextDate'

export const OneCategoryWfilter:FC<IProductsApi> = ({ 
        firsLine,secondLine,thirdLine,price,
        nameProduct,category,link,image
 }):JSX.Element => {

    const { label1, label2, label3 } = categoryData[category as keyof TCategoryData];

    const dateNowShow = useGetDateNow();
    const dateNextShow = useGetDateNext();

    return (
        <Link to={`/products/${link}`} className={classes.container_product}>
            <div className={classes.image}>
                <img src={ image } alt="photo-product"/>
            </div>
            <div className={classes.text_characterise}>
                <h4>{ nameProduct }</h4>
                <StarViewUI/>
                <>
                    <p>{label1}: {firsLine}</p>
                    <p>{label2}: {secondLine}</p>
                    <p>{label3}: {thirdLine}</p>
                    <p>Самовывоз: 
                        <span> Минск - Сегодня, {dateNowShow}</span>
                    </p>
                    <p>Доставка: 
                        <span> Минск - Завтра, {dateNextShow}</span>
                    </p>
                </>
            </div>
            <div className={classes.btns_cards}>
                <div className={classes.join}>
                    <h3>{ price.trim() }</h3>
                    <NavLink to = '/basket' className={classes.navLink_button}>
                        <ButtonUi 
                            
                        >В корзину</ButtonUi>
                    </NavLink>
                </div>
                <div className={classes.icons_btn}>
                {
                    itemsStyles.slice(0,3).map((item:INavigateItems) => (
                        <span key={item.id}>
                            <NavLink to={`/${item.link}`} className={classes.btn_link}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </NavLink>
                        </span>
                    ))
                }
                </div>
            </div>
        </Link>
    )
}