import React,{ FC,useState } from 'react'
import classes from '../../HeadNavigation/Catalog_parametres/CategoryHelper/RightCategories/BrandsSquare/styles_brands/BrandSquare.module.css'
import { ArrayBrands,Ibrands } from '../../../Utils/ArrayHelper/brandsArray'
import { BrandSquare } from '../../HeadNavigation/Catalog_parametres/CategoryHelper/RightCategories/BrandsSquare/BrandSquare'

type TCalculateSize = {
    width:string,
    height:string
}

const calculateSizeBox = (screenWidth:number):TCalculateSize => { 
    const desiredWidthVw = 12;
    const desiredHeightVh = 10;

    const actualWidthPx = (screenWidth * desiredWidthVw) / 90;
    const actualHeightPx = (window.innerHeight * desiredHeightVh) / 90;

    return {
        width: `${actualWidthPx}px`,
        height: `${actualHeightPx}px`,
    };
}

export const ShowBrands:FC = ():JSX.Element => {
    let screenWidth = window.innerWidth;
    let sizeBox = calculateSizeBox(screenWidth);
    return (
            <div className={classes.Main_square_list} style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                {
                    ArrayBrands.map((item:Ibrands) => (
                        <BrandSquare 
                            key = {item._id}
                            _id = {item._id}
                            BrandLinks = {item.BrandLinks}
                            BrandImageSrc = {item.BrandImageSrc}
                            altBrands = {item.altBrands}
                            imageHeight = {sizeBox.height}
                            imageWidth = {sizeBox.width}
                        />
                    ))
                }
            </div>
    )
}