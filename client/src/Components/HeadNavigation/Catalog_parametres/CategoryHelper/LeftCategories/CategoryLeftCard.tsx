import React,{useState,useEffect,FC,useContext,createContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './LeftCategories_styles/category-left-Card.module.css'
import  ICategoriesContent  from '../../../../../API/interface_requests'

interface ICategories{
    link:string,
    advanceCategories:{
        Sells:string[],
        SellsLinks:string[]
    }
}
export default ICategories

export interface ICategoriesWProp extends ICategoriesContent{
    setStateInfo:(state:ICategories) => void;
}

export const ObjectCategoryContext = createContext<ICategories | null>(null)

export const CategoryCard:FC<ICategoriesWProp> = ({ link,imageSrc,textName,altImage,advanceCategories,setStateInfo }) : JSX.Element => {
    
    const createListRight = () => {
        setStateInfo({ advanceCategories,link })
    }

    return (
        <Link to = { link } className = {classes.link_category} onMouseEnter={createListRight}>
            <div className={classes.category_contentName}>
                <img src={imageSrc} alt={altImage} />
                <p>{textName}</p>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
        </Link>
    )
}