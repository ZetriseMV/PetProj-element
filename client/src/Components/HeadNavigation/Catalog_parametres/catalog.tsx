import React,{useState,FC,createContext} from 'react'
import { CategoryLeftListCard } from './CategoryHelper/LeftCategories/CategoryLeftListcard'
import classes from './catalog_styles/catalog_styles.module.css'
import { CategoryRightCard } from './CategoryHelper/RightCategories/CategoryRightCard'
import { ArrayCategories } from '../../../Utils/ArrayHelper/categoriesArray'
import  ICategories  from './CategoryHelper/LeftCategories/CategoryLeftCard'

export const ObjectCategoryContext = createContext<ICategories | null>(null)

export const NavigateCatalog : FC = (): JSX.Element => {
    /* тут брать данные из базы данных путем запроса на сервер */
    const [stateInfo, setStateInfo] = useState<ICategories>({
        link:ArrayCategories[0].link,
        advanceCategories: ArrayCategories[0].advanceCategories
    });
    return (
        <div className={classes.catalog_background}>
            <div className={classes.categories_content}>
            <ObjectCategoryContext.Provider value={ stateInfo }>
                <div className={classes.categoryLeft}>
                    <CategoryLeftListCard setStateInfo = {setStateInfo}/>
                </div>
                <div className={classes.categoryRight}>
                    <CategoryRightCard/>
                </div>
            </ObjectCategoryContext.Provider>
            </div>
        </div>
    )
}
