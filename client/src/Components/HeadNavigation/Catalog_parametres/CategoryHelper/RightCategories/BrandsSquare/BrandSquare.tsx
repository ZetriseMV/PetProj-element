import React,{useState,useEffect,FC} from 'react'
import  {Ibrands} from '../../../../../../Utils/ArrayHelper/brandsArray'
import { Link } from 'react-router-dom'
import classes from './styles_brands/BrandSquare.module.css'

export const BrandSquare:FC<Ibrands & {imageHeight:string,imageWidth:string}> = ({ imageHeight,imageWidth,_id,BrandLinks,BrandImageSrc,altBrands }):JSX.Element =>  {
    return (
        <Link style={{width:imageWidth,height:imageHeight}} to = {`/brandzone${BrandLinks}`} className={classes.brand_link}>
            <img src = {BrandImageSrc} className={classes.ImageBrand} alt = {altBrands}/>
        </Link>
    )
}