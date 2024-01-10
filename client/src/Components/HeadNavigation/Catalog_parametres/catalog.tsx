import React,{useEffect,useState,FC,createContext} from 'react'
import { CategoryLeftListCard } from './CategoryHelper/LeftCategories/CategoryLeftListcard'
import classes from './catalog_styles/catalog_styles.module.css'
import { CategoryRightCard } from './CategoryHelper/RightCategories/CategoryRightCard'
import  ICategories  from './CategoryHelper/LeftCategories/CategoryLeftCard'
import  ICategoriesContent  from '../../../API/interface_requests'

export const ObjectCategoryContext = createContext<ICategories | null>(null)

export type CategoriesPropsfromApiToCatalog = {
    navigateCategoriesData:ICategoriesContent[]
}

export const NavigateCatalog:FC<CategoriesPropsfromApiToCatalog> = ({ navigateCategoriesData }): JSX.Element => {
    const [stateInfo, setStateInfo] = useState<ICategories>({
        link:navigateCategoriesData[0].link,
        advanceCategories: navigateCategoriesData[0].advanceCategories
    });
    return (
        <div className={classes.catalog_background}>
            <div className={classes.categories_content}>
            <ObjectCategoryContext.Provider value={ stateInfo }> {/* есь возможность добавить 2 свойcтво в createContext */}
                <div className={classes.categoryLeft}>
                    <CategoryLeftListCard setStateInfo = {setStateInfo} navigateCategoriesData = {navigateCategoriesData}/>
                </div>
                <div className={classes.categoryRight}>
                    <CategoryRightCard/>
                </div>
            </ObjectCategoryContext.Provider>
            </div>
        </div>
    )
}
