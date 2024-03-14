import React,{ FC,useState } from 'react'
import classes from '../../HeadNavigation/Catalog_parametres/CategoryHelper/RightCategories/BrandsSquare/styles_brands/BrandSquare.module.css'
import { ArrayBrands,Ibrands } from '../../../Utils/ArrayHelper/brandsArray'
import { BrandSquare } from '../../HeadNavigation/Catalog_parametres/CategoryHelper/RightCategories/BrandsSquare/BrandSquare'
export const ShowBrands:FC = ():JSX.Element => {
    return (
            <div className={classes.Main_square_list} style={{display:'flex',justifyContent:'center'}}>
                {
                    ArrayBrands.map((item:Ibrands) => (
                        <BrandSquare 
                            key = {item._id}
                            _id = {item._id}
                            BrandLinks = {item.BrandLinks}
                            BrandImageSrc = {item.BrandImageSrc}
                            altBrands = {item.altBrands}
                            imageHeight='100px'
                            imageWidth='200px'
                        />
                    ))
                }
            </div>
    )
}