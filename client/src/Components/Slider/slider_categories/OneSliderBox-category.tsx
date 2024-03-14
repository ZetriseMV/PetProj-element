import { Link } from 'react-router-dom'
import { FC } from 'react'
import classes from './oneBoxCategory/slider_box.module.css'
import { IsubCatalog } from '../../../Utils/ArrayHelper/subCatalogArray'

export const OneSliderBoxCategory:FC<IsubCatalog> = ({ _id,text,link,img }):JSX.Element => {
    return (
        <Link className={classes.link_sliderBox} to = { link }>
            <img src={ img } alt="photo_category" className={classes.image_category}/>
            <h4>{ text }</h4>
        </Link>
    )
}