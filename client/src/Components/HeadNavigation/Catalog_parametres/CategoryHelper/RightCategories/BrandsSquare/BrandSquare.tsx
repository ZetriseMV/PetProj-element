import React,{useState,useEffect,FC} from 'react'
import  {Ibrands} from '../../../../../../Utils/ArrayHelper/brandsArray'
import { Link } from 'react-router-dom'
import classes from './styles_brands/BrandSquare.module.css'

export const BrandSquare:FC<Ibrands> = ({ id,BrandLinks,BrandImageSrc,BackgroundColor,altBrands }):JSX.Element =>  {
    return (
        <Link to = {BrandLinks} className={classes.brand_link}>
            <img src = {BrandImageSrc} className={classes.ImageBrand} alt = {altBrands}/>
        </Link>
    )
}