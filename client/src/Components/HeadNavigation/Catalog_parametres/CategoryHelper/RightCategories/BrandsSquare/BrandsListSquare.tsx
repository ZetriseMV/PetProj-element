import React,{useState,useEffect,FC} from 'react'
import classes from './styles_brands/BrandSquare.module.css'
import  {Ibrands} from '../../../../../../Utils/ArrayHelper/brandsArray'
import { BrandSquare } from './BrandSquare'

type BrandListSquareWProp = {
    stateArrayBrandsSquare:Ibrands[];
}
export const BrandListSquares:FC<BrandListSquareWProp>  = (  { stateArrayBrandsSquare }  ):JSX.Element => {
    return (
        <div className={classes.Main_square_list}>
            {
                stateArrayBrandsSquare.map((item:Ibrands) => (
                    <BrandSquare
                        key = {item._id}
                        _id = {item._id}
                        BrandLinks = {item.BrandLinks}
                        BrandImageSrc = {item.BrandImageSrc}
                        altBrands = {item.altBrands}
                        imageHeight='70px'
                        imageWidth='120px'
                    />
                ))
            }
        </div>
    )
}
