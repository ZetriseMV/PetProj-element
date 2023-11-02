import React,{useState,useEffect,FC} from 'react'
import { Link } from 'react-router-dom'
import { IWideCategories } from '../CategoryRightCard'
import classes from './styles_wideCategories/wideCategories.module.css'

type CategoriesWideListWProp = {
    stateWideCategories:IWideCategories | null;
}

export const CategoriesWideList:FC<CategoriesWideListWProp> = ({ stateWideCategories }):JSX.Element | null => {
    return(
        <div className={classes.WideRight_categories}>
            {
                stateWideCategories?.Sells.map((sell,index) => (
                    <Link key={index} to = {`/${stateWideCategories.SellsLinks[index]}`} className={classes.Link_wideCategory_right}>
                        <p>{ sell }</p>
                    </Link>
                ))
            }
        </div>
    )
}