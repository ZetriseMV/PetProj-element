import React,{ useState,useEffect,FC  } from 'react'
import { Link,NavLink } from 'react-router-dom'
import classes from './styles_product/categoryProducts.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import { ButtonUi } from '../../Ui/button/button'
import { itemsStyles,INavigateItems } from '../../HeadNavigation/btnsMain_navigate/ListCardBtn'
import { categoryData,TCategoryData } from '../helper-categoryType'
import { generateRandomString } from '../../../Utils/ArrayHelper/brandsArray'


export const OneCategoryWfilter:FC<IProductsApi> = ({ 
    _id,firsLine,secondLine,thirdLine,
    fourthLine,fifthLine,sixthLine,
    seventhLine,eighthLine,ninethLine,
    tenthLine,eleventhLine,price,
    nameProduct,category,link,image,__v
 }):JSX.Element => {

    const { label1, label2, label3 } = categoryData[category as keyof TCategoryData];

    return (
        <NavLink to={`/products/${link}`} className={classes.container_product}>
            <div className={classes.image}>
                <img src={ image } alt="photo-product"/>
            </div>
            <div className={classes.text_characterise}>
                <h4>{ nameProduct }</h4>
                <div className={classes.grade_star}>
                    {
                        [...Array(5)].map(() => (
                            <svg key={generateRandomString()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        ))
                    }
                </div>
                <>
                    <p>{label1}: {firsLine}</p>
                    <p>{label2}: {secondLine}</p>
                    <p>{label3}: {thirdLine}</p>
                    <p>Самовывоз: <span>Минск - Сегодня, 07.01.2024</span></p>
                    <p>Доставка: <span>Минск - Завтра, 08.01.2024</span></p>
                </>
            </div>
            <div className={classes.btns_cards}>
                <div className={classes.join}>
                    <h3>{ price.trim() }</h3>
                    <ButtonUi 
                        onClick={(event) => event.preventDefault()}
                    >В корзину</ButtonUi>
                </div>
                <div className={classes.icons_btn}>
                {
                    itemsStyles.map((item:INavigateItems) => (
                        <span key={item.id}>
                            <Link to={`/${item.link}`} className={classes.btn_link}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </Link>
                        </span>
                    ))
                }
                </div>
            </div>
        </NavLink>
    )
}