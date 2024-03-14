import Slider from "react-slick";
import React,{ FC } from 'react' 
import classes from './slider_categories_styles/slide_categoriesStyle.module.css'
import subCatalogArray,{ IsubCatalog }  from '../../../Utils/ArrayHelper/subCatalogArray'
import { settings } from "./settings";
import { OneSliderBoxCategory } from './OneSliderBox-category'

export const SliderCategories:FC = ():JSX.Element => {

    const ArrayWithoutActions:IsubCatalog[] = subCatalogArray.filter(value => {
        return value.link !== '/actions'
    })

    return (
        <div className={classes.container_slider_categories}>
            <Slider {...settings}>
                {
                    ArrayWithoutActions.map((item:IsubCatalog) => (
                        <OneSliderBoxCategory
                            _id = {item._id}
                            text = {item.text}
                            link = {item.link}
                            img = {item.img}
                            key={item._id}
                        />
                    ))
                }
            </Slider>
        </div>
    )
}
