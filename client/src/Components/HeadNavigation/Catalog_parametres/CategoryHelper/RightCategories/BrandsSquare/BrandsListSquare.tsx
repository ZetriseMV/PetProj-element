import React,{useState,useEffect,FC} from 'react'
import classes from './styles_brands/BrandSquare.module.css'
import  {Ibrands,ArrayBrands} from '../../../../../../Utils/ArrayHelper/brandsArray'
import { BrandSquare } from './BrandSquare'
import  ICategories  from '../../LeftCategories/CategoryLeftCard'

type BrandListSquareWProp = {
    stateArrayBrandsSquare:Ibrands[];
}
export const BrandListSquares:FC<BrandListSquareWProp>  = (  { stateArrayBrandsSquare }  ):JSX.Element => {
    return (
        <div className={classes.Main_square_list}>
            {
                stateArrayBrandsSquare.map((item:Ibrands) => (
                    <BrandSquare
                        key = {item.id}
                        id = {item.id}
                        BrandLinks = {item.BrandLinks}
                        BrandImageSrc = {item.BrandImageSrc}
                        BackgroundColor = {item.BackgroundColor}
                        altBrands = {item.altBrands}
                    />
                ))
            }
        </div>
    )
}
